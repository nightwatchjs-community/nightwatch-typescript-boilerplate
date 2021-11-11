import {EnhancedPageObject} from 'nightwatch';

const elements = {
  select: '#dropdown'
};

const dropdown = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/dropdown`;
  },
  elements
};

export default dropdown;

export type DropDownPage = EnhancedPageObject<typeof dropdown>;
