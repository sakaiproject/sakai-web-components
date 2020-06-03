import { html } from 'lit-html';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import '../src/sakai-course-card.js';

export default {
  title: 'Sakai Web Components',
  decorators: [withKnobs]
};

export const Heading = () => html`
  <h1>Sakai Web Components</h1>
`;

export const SettingProperties = () => {

  let el = document.createElement("sakai-course-card");
  el.setAttribute("title", text('title', 'Course Title'));
  el.setAttribute("code", text('code', 'Course Code'));
  return el;
};
