import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  'Google Demo Tests': () => {
    browser
      .url('https://google.com/ncr')
      .assert.title('Google')
      .end();
  }
};

export default home;
