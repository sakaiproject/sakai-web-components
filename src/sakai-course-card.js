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
      body {
      }
      .course-block {
        border: 1px solid;
        border-color: var(--sakai-course-card-border-color, red);
        border-bottom: 0;
        border-radius: var(--sakai-course-card-border-radius, 4px) var(--sakai-course-card-border-radius, 4px) 0px 0px;
        padding: var(--sakai-course-card-padding, 13px);
        background-color: var(--sakai-course-card-background-color, darkgray);
      }
      .top-bar { display: flex; justify-content: space-between;}
      .title-block {
        flex: 2;
        color: var(--sakai-course-card-title-color, white);
        font-family: var(--sakai-course-card-font-family, arial);
      }
      .title-block span {
        margin-left: 8px;
        font-size: var(--sakai-course-card-title-font-size, 18px);
      }
      .code-block {
        color: var(--sakai-course-card-code-color, white);
        font-size: var(--sakai-course-card-code-font-size, 14px);
        font-family: var(--sakai-course-card-font-family, arial);
      }
      .disclose-block { flex: 1; text-align: right; }
      .tool-alerts-block {
        display: flex;
        align-items: center;
        justify-content: left;
        height: var(--sakai-course-card-tool-alerts-height, 40px);
        padding: var(--sakai-course-card-tool-alerts-padding, 5px);
        border: 1px solid;
        border-color: var(--sakai-course-card-border-color, red);
        border-radius: 0px 0px var(--sakai-course-card-border-radius, 4px) var(--sakai-course-card-border-radius, 4px);
        border-top: 0;
        background-color: var(--sakai-course-card-tool-alerts-background-color, white);
        color: var(--sakai-course-card-tool-alerts-color, black);
      }
      sakai-icon { margin: 0 5px 0 5px; }
      .tool-alerts-block div { flex: 0; margin-left: 5px; margin-right: 5px; }
      .favourite { color: var(--sakai-icon-favourite-color, yellow) }

      #arrow, #arrow::before {
        position: absolute;
        width: 10px;
        height: 10px;
        z-index: -1;
        margin-top: 1px;
      }

      #arrow::before {
        content: '';
        transform: rotate(45deg);
        background: white;
      }

      #tooltip[data-popper-placement^='top'] > #arrow {
        bottom: -4px;
      }

      #tooltip[data-popper-placement^='bottom'] > #arrow {
        top: -4px;
      }

      #tooltip[data-popper-placement^='left'] > #arrow {
        right: -4px;
      }

      #tooltip[data-popper-placement^='right'] > #arrow {
        left: -4px;
      }
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
      }
    } else {
      if (this.alerts.includes(e.target.value)) {
        this.alerts.splice(this.alerts.indexOf(e.target.value), 1);
        this.alerts = [ ...this.alerts ];
      }
    }

    return false;
  }

  render() {
              //<div id="arrow" data-popper-arrow></div>

    return html`
      <div class="course-block">
        <div class="top-bar">
          <div class="title-block">
            <sakai-icon class="favourite" type="favourite" size="small"></sakai-icon>
            <span>${this.courseTitle}</span>
          </div>
          <sakai-options-menu>
            <div slot="content" id="tooltip">
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
