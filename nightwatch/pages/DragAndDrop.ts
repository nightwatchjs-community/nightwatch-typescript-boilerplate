import {EnhancedPageObject} from 'nightwatch';

const elements = {
  columnA: '#column-a',
  columnAHeader: element('#column-a header'),
  columnB: '#column-b'
};

const dragAndDrop = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/drag_and_drop`;
  },
  elements
};

export default dragAndDrop;

export type DragAndDropPage = EnhancedPageObject<typeof dragAndDrop>;
