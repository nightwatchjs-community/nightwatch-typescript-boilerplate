import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  disabled: true,
  'Drag and Drop test': async () => {
    const dragAndDrop = browser.page.DragAndDrop();
    dragAndDrop.navigate();

    const destination = await browser.findElement('#column-b');

    await dragAndDrop.dragAndDrop('@columnA', destination.getId());
    dragAndDrop.expect.element('@columnAHeader').text.to.equal('B');
    browser.end();
  }
};

export default home;
