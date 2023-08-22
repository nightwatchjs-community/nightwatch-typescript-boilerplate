describe('Drag and Drop', function() {
  this.disabled = true;

  it('Drag and Drop test', async function(browser) {
    const dragAndDropPage = browser.page.DragAndDrop();

    dragAndDropPage.navigate();

    // perform drag and drop action
    const destination = await dragAndDropPage.element.find('@columnB');
    await dragAndDropPage.dragAndDrop('@columnA', destination);

    // assert on the header of column A
    const columnASection = dragAndDropPage.section.columnASection;
    columnASection.expect.element('@header').text.to.equal('B');

    browser.end();
  });
});
