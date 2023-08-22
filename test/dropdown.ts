describe('Dropdown', function() {
  it('Dropdown test', function() {
    const dropDownPage = browser.page.Dropdown();

    dropDownPage
      .navigate()
      .click('@select', () => {
        dropDownPage.click('option[value=\'2\']');
      })
      .assert.valueEquals('@select', '2');

    browser.end();
  });
});
