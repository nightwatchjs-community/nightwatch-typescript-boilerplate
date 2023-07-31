import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  disabled: true,
  'Drag and Drop test': async () => {
    const dragAndDropPage = browser.page.DragAndDrop();
    dragAndDropPage.navigate();

    const destination = await dragAndDropPage.element.find('@columnB');
    await dragAndDropPage.dragAndDrop('@columnA', destination);

    dragAndDropPage.expect.element('@columnAHeader').text.to.equal('B');

    browser.end();
  }
};

export default home;
