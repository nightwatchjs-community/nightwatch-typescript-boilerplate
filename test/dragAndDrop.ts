import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  disabled: true,
  'Drag and Drop test': async () => {
    const dragAndDropPage = browser.page.DragAndDrop();
    dragAndDropPage.navigate();

    // perform drag and drop action
    const destination = await dragAndDropPage.element.find('@columnB');
    await dragAndDropPage.dragAndDrop('@columnA', destination);

    // assert on the header of column A
    const columnASection = dragAndDropPage.section.columnASection;
    columnASection.expect.element('@header').text.to.equal('B');

    browser.end();
  }
};

export default home;
