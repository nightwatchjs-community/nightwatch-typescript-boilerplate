import {EnhancedPageObject, PageObjectModel, SectionProperties} from 'nightwatch';

const elements = {
  columnA: '#column-a',
  columnB: '#column-b'
};

const columnASection = {
  selector: '#column-a',
  elements: {
    header: 'header'
  }
} satisfies SectionProperties;

const dragAndDrop = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/drag_and_drop`;
  },
  elements,
  sections: {
    columnASection
  }

} satisfies PageObjectModel;

export interface DragAndDropPage extends
  EnhancedPageObject<{}, typeof elements, typeof dragAndDrop.sections, {}, () => string> {} // eslint-disable-line @typescript-eslint/ban-types

export default dragAndDrop;
