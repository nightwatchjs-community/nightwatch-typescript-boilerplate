import {EnhancedPageObject, PageObjectModel} from 'nightwatch';

const elements = {
  select: '#dropdown'
};

const dropdown = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/dropdown`;
  },
  elements
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _: PageObjectModel = dropdown;

export interface DropDownPage extends
  EnhancedPageObject<{}, typeof elements, {}, {}, () => string> {} // eslint-disable-line @typescript-eslint/ban-types

export default dropdown;
