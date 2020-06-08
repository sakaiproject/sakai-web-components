import { html, css, LitElement } from 'lit-element';
import './sakai-icon.js';
import './sakai-options-menu.js';

export class SakaiCourseCard extends LitElement {

  static get styles() {

    return css`
      :host {
        display: block;
        width: var(--sakai-course-card-width, 240px);
      }
      .course-block { border: black 1px solid; border-bottom: 0; border-radius: 5px 5px 0px 0px; padding: 5px; background-color: lightgray; }
      .top-bar { display: flex; justify-content: space-between;}
      .title-block { flex: 2 }
      .title-block span { margin-left: 8px; font-size: var(--sakai-course-card-title-font-size, 20px) }
      .disclose-block { flex: 1; text-align: right; }
      .tool-alerts-block { align-items: center; justify-content: left; display: flex; height: 30px; border: black 1px solid; border-radius: 0px 0px 5px 5px; border-top: 0; }
      .tool-alerts-block div { flex: 0; margin-left: 5px; margin-right: 5px; }
    `;
  }

  static get properties() {

    return {
      courseTitle: { attribute: "course-title", type: String },
      courseCode: { attribute: "course-code", type: String },
      alerts: { type: Array },
    };
  }

  constructor() {

    super();

    this.courseTitle = 'Course Title';
    this.courseCode = 'Course Code';
    this.alerts = ["assignments", "gradebook"];

    this.toolnameMap = {
      'assignments': 'Assignments',
      'gradebook': 'Gradebook',
      'forums': 'Forums',
    };
  }

  _toolClicked(e) {

    e.stopPropagation();
    if (e.target.checked) {
      if (!this.alerts.includes(e.target.value)) {
        this.alerts.push(e.target.value);
        this.alerts = [ ...this.alerts ];
        console.log(this.alerts);
      }
    } else {
      if (this.alerts.includes(e.target.value)) {
        this.alerts.splice(this.alerts.indexOf(e.target.value), 1);
        this.alerts = [ ...this.alerts ];
        console.log(this.alerts);
      }
    }

    return false;
  }

  render() {

    return html`
      <div class="course-block">
        <div class="top-bar">
          <div class="title-block">
            <sakai-icon type="favourite"></sakai-icon>
            <span>${this.courseTitle}</span>
          </div>
          <sakai-options-menu>
            <div slot="content">
              <div>Select tools to display:</div>
              ${Object.keys(this.toolnameMap).map(k => html`
                <div><input type="checkbox" value="${k}" .checked=${this.alerts.includes(k)} @click=${this._toolClicked} />${this.toolnameMap[k]}</div>
              `)}
            </div>
          </sakai-options-menu>
        </div>
        <div class="code-block">${this.courseCode}</div>
      </div>
      <div class="tool-alerts-block">
        ${this.alerts.map(a => html`<div><sakai-icon type="${a}" size="small" /></div>`)}
      </div>
    `;
  }
}

window.customElements.define("sakai-course-card", SakaiCourseCard);
