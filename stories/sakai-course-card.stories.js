import { html } from 'lit-html';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withCssResources } from '@storybook/addon-cssresources';

import '../src/sakai-course-card.js';

export default {
  title: 'Sakai Course Card',
  decorators: [withCssResources, withKnobs],
  parameters: {
    cssresources: [
      {
        id: `smalltheme`,
        code: `
          <style>
            body {
              --sakai-course-card-font-face: arial;
              --sakai-course-card-width: 180px;
              --sakai-course-card-title-font-size: 12px;
              --sakai-course-card-code-font-size: 10px;
              --sakai-course-card-background-color: red;
              --sakai-course-card-title-color: green;
              --sakai-options-menu-invoker-color: white;
              --sakai-icon-favourite-color: green;
              --sakai-course-card-tool-alerts-height: 20px;
              --sakai-course-card-border-color: black;
            }
          </style>`,
        picked: false,
      },
      {
        id: `bigtheme`,
        code: `
          <style>
            body {
              --sakai-course-card-font-face: arial;
              --sakai-course-card-width: 480px;
              --sakai-course-card-title-font-size: 40px;
              --sakai-course-card-code-font-size: 30px;
              --sakai-course-card-background-color: blue;
              --sakai-course-card-title-color: white;
              --sakai-course-card-border-radius: 10px;
              --sakai-options-menu-invoker-color: green;
              --sakai-icon-alert-color: green;
              --sakai-icon-favourite-color: red;
              --sakai-course-card-tool-alerts-height: 40px;
              --sakai-course-card-border-color: black;
            }
          </style>`,
        picked: false,
      }
    ],
  },
};

export const BasicDisplay = () => {

  return html`
    <sakai-course-card course-title="${text('course-title', 'Physical Ocean')}" course-code="${text('course-code', 'Evolutionary Biology')}" />
  `;
};
