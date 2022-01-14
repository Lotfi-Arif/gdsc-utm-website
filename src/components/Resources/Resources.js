import { gdscService } from '../../services/globalServices.js';
import { KKWebComponent } from "../KKWebComponent.js";
import { LabeledAvatar } from "../labeledAvatar/LabeledAvatar.js";
import { LabeledUrlIcon } from "../labeledUrlIcon/LabeledUrlIcon.js";
import { style } from './Info.style.js';

const template = `
<section class="resource">
  <h2>Resources</h2>
  <div class="resource-wrapper"></div>
</section>
<section class="news">
  <h2>News</h2>
  <ul class="items-wrapper news-wrapper"></ul>
</section>
`;

export class Resources extends KKWebComponent {
  static TAG = `kk-club-contact`;

  resourceWrapper = this.shadowRoot.querySelector('.resource-wrapper');
  newsWrapper = this.shadowRoot.querySelector('.news-wrapper');

  constructor() {
    super(template, style);
  }

  connectedCallback() {
    super.connectedCallback();
    void gdscService.getOrganizers().then(this.renderMembers)
    void gdscService.getContact().then(this.renderContacts)
  }

  renderResources = (resources) => {
    for (const {avatar, name, title} of resources) {
      const singleResource = document.createElement('li');
      singleResource.append(new LabeledAvatar(name, avatar, title));
      this.resourceWrapper.append(singleOrganizer);
    }
  }

  renderNews = (news) => {
    for (const {iconId, url} of news) {
      const singleContact = document.createElement('li');
      singleContact.append(new LabeledUrlIcon({label: iconId.toUpperCase(), url, iconId}));
      this.contactWrapper.append(singleContact);
    }
  }
}

customElements.define(Info.TAG, Info);
