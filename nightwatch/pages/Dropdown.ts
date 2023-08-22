import {EnhancedPageObject, PageObjectModel} from 'nightwatch';

const elements = {
  select: '#dropdown'
};

// If `satisfies` operator is not available (TypeScript < 4.9), define the
// page object like below. Doing this ensures that the `dropdown` variable
// has the correct structure for a page object, while also preserving the
// literal type for `dropdown` and all of its components.
const dropdown = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/dropdown`;
  },
  elements
};
const _: PageObjectModel = dropdown; // eslint-disable-line @typescript-eslint/no-unused-vars

export interface DropDownPage extends
  EnhancedPageObject<{}, typeof elements, {}, {}, typeof dropdown.url> {} // eslint-disable-line @typescript-eslint/ban-types

export default dropdown;
