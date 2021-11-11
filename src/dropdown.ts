import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  'Dropdown test': async () => {
    const dropdown = browser.page.Dropdown();
    dropdown
      .navigate()
      .click('@select', () => {
        dropdown.click('option[value=\'2\']');
      })
      .assert.value('@select', '2');

    browser.end();
  }
};

export default home;
