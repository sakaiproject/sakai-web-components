import { html, css, LitElement } from 'lit-element';
import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faEllipsisV, faBell, faComments, faBook, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export class SakaiIcon extends LitElement {

  static get styles() {

    return css`
      .sakai-small-icon { width: var(--sakai-standard-icon-width, 14px); height: var(--sakai-standard-icon-height, 14px) }
      .sakai-standard-icon { width: var(--sakai-standard-icon-width, 24px); height: var(--sakai-standard-icon-height, 24px) }
    `;
  }

  static get properties() {

    return {
      type: String,
      size: String,
    };
  }

  constructor() {

    super();
    this.size = "standard";
  }

  render() {
    return html`${icon(SakaiIcon.lookups.get(this.type), {classes: `sakai-${this.size}-icon`}).node}`;
  }
}

library.add(faEllipsisV); // Menu
library.add(faStar); // Favourite
library.add(faBell); // General alerts
library.add(faComments); // Forums
library.add(faBook); // Gradebook
library.add(faFileAlt); // Assignments

SakaiIcon.lookups = new Map();
SakaiIcon.lookups.set("favourite", faStar);
SakaiIcon.lookups.set("alert", faBell);
SakaiIcon.lookups.set("menu", faEllipsisV);
SakaiIcon.lookups.set("forums", faComments);
SakaiIcon.lookups.set("gradebook", faBook);
SakaiIcon.lookups.set("assignments", faFileAlt);

if (!customElements.get("sakai-icon")) {
  customElements.define("sakai-icon", SakaiIcon);
}
