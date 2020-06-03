import { html, css, LitElement } from 'lit-element';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faEllipsisV, faBell, faComments } from '@fortawesome/free-solid-svg-icons';

export class SakaiCourseCard extends LitElement {

  static get styles() {

    return css`
      :host {
        display: block;
        width: var(--sakai-course-card-width, 240px);
      }
      .sakai-icon { width: var(--sakai-icon-width, 24px); height: var(--sakai-icon-height), 24px) }
      .sakai-disclose-icon { height: var(--sakai-disclose-icon-width, 14px) }
      .sakai-tool-alert-icon { color: green; width: var(--sakai-icon-width, 14px); height: var(--sakai-icon-height), 14px) }
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
      title: String,
      code: String,
    };
  }

  constructor() {

    super();
    library.add(faEllipsisV);
    library.add(faStar);
    library.add(faBell);
    library.add(faComments);
    dom.watch({
      autoReplaceSvgRoot: this.shadowRoot,
      observeMutationsRoot: this.shadowRoot
    });
    this.title = 'Course Title';
    this.code = 'Course Code';
  }

  __showOptions(e) {
    console.log('__showOptions');
  }

  render() {

    return html`
      <div class="course-block">
        <div class="top-bar">
          <div class="title-block">
            <i class="fas fa-star sakai-icon"></i>
            <span>${this.title}</span>
          </div>
          <div class="disclose-block"><a href="javascript:;" @click=${this.__showOptions}><i class="fas fa-ellipsis-v sakai-disclose-icon"></i></a></div>
        </div>
        <div class="code-block">${this.code}</div>
      </div>
      <div class="tool-alerts-block">
      <div><i class="fas fa-bell sakai-tool-alert-icon"></i></div>
      <div><i class="fas fa-comments sakai-tool-alert-icon"></i></div>
      </div>
    `;
  }
}

window.customElements.define("sakai-course-card", SakaiCourseCard);
