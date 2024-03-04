describe('iFrame', function() {
  it('iFrame test', async function() {
    const iFramePage = browser.page.IFrame();

    iFramePage.navigate();

    // `frame` command is not directly available on page-object.
    browser.frame(iFramePage.elements.iframe.selector);

    iFramePage.expect.element('@textbox').text.to.equal('Your content goes here.');

    browser.end();
  });
});
