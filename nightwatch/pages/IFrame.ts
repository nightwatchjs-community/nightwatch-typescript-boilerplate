import {EnhancedPageObject} from 'nightwatch';

const elements = {
  iframe: '#mce_0_ifr',
  textbox: 'body#tinymce p'
};

const iFrame = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/iframe`;
  },
  elements
};

export default iFrame;

export type iFramePage = EnhancedPageObject<typeof iFrame>;
