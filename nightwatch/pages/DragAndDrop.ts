import {EnhancedPageObject, PageObjectModel} from 'nightwatch';

const elements = {
  columnA: '#column-a',
  columnAHeader: {
    selector: '#column-a header'
  },
  columnB: '#column-b'
};

const dragAndDrop = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/drag_and_drop`;
  },
  elements
} satisfies PageObjectModel;

export interface DragAndDropPage extends
  EnhancedPageObject<{}, typeof elements, {}, {}, () => string> {} // eslint-disable-line @typescript-eslint/ban-types

export default dragAndDrop;
