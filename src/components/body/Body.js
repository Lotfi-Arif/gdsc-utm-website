import { KKWebComponent } from "../KKWebComponent.js";
import { style } from './Body.style.js';
import { Info } from "../info/Info.js";

const template = `
<main>
  <${Info.TAG}></${Info.TAG}>
</main>
`;

export class Body extends KKWebComponent {
  static TAG = `kk-body`;

  bodyWrapper = this.shadowRoot.querySelector('main');

  constructor() {
    super(template, style);
  }

  async changeTab(tabName) {
    switch (tabName) {
      case 'Events':
        const {Events} = await import('../events/Events.js');
        this.bodyWrapper.firstElementChild.remove();
        this.bodyWrapper.append(new Events());
        break;
      case 'Projects':
        const {Projects} = await import('../projects/Projects.js');
        this.bodyWrapper.firstElementChild.remove();
        this.bodyWrapper.append(new Projects());
        break;
      case 'Teams':
        const {Teams} = await import('../teams/Teams.js');
        this.bodyWrapper.firstElementChild.remove();
        this.bodyWrapper.append(new Teams());
        break;
      case 'Info':
        const {Info} = await import('../info/Info.js');
        this.bodyWrapper.firstElementChild.remove();
        this.bodyWrapper.append(new Info());
        break;
    }
  }
}

customElements.define(Body.TAG, Body);
