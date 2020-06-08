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

  return html`
    <sakai-course-card course-title="${text('course-title', 'Course Title')}" course-code="${text('course-code', 'Course Code')}" />
  `;
};
