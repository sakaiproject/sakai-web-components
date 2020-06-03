import { html } from 'lit-html';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: 'Sakai Web Components',
  decorators: [withKnobs]
};

export const Heading = () => html`
  <h1>Sakai Web Components</h1>
`;
