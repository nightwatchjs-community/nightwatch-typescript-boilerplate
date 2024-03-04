import {EnhancedPageObject, PageObjectModel} from 'nightwatch';

const elements = {
  iframe: '#mce_0_ifr',
  textbox: 'body#tinymce p'
};

const iFrame = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/iframe`;
  },
  elements
} satisfies PageObjectModel;

export interface iFramePage extends
  EnhancedPageObject<{}, typeof elements, {}, {}, () => string> {} // eslint-disable-line @typescript-eslint/ban-types

export default iFrame;
