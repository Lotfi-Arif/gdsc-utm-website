import { KKWebComponent } from "../KKWebComponent.js";
import { style } from './LabeledUrlAvatar.style.js';

const template = `
<a class="wrapper">
  <input class="avatar-img" type="image" alt="user avatar" src="./assets/images/default-avatar.webp">
  <label class="avatar-label"></label>
</a>
`;

export class LabeledUrlAvatar extends KKWebComponent {
  static TAG = `kk-labeled-url-avatar`;

  wrapper = this.shadowRoot.querySelector('.wrapper');
  labelWrapper = this.shadowRoot.querySelector('.avatar-label');
  imageWrapper = this.shadowRoot.querySelector('.avatar-img');

  constructor(label, photoUrl) {
    super(template, style);
    this.label = label;
    this.avatar = photoUrl;
  }

  set label(text) {
    this.labelWrapper.textContent = text;
  }

  set avatar(url) {
    this.imageWrapper.src = url;
  }


}

customElements.define(LabeledUrlAvatar.TAG, LabeledUrlAvatar);
