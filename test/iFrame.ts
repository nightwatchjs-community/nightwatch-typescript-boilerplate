import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  'iFrame test': async () => {
    const iFrame = browser.page.IFrame();
    iFrame.navigate();
    const frame = await browser.findElement(iFrame.elements.iframe);
    browser.frame(frame);
    iFrame.expect.element('@textbox').text.to.equal('Your content goes here.');

    browser.end();
  }
};

export default home;
