import {NightwatchTests} from 'nightwatch';
import path from 'path';

const filePath = path.join(path.resolve('.'), 'sample/test.txt');

const home: NightwatchTests = {
  'File Upload test': () => {
    const fileUpload = browser.page.FileUpload();
    fileUpload
      .navigate()
      .uploadFile('@fileUploadInput', filePath)
      .click('@submitButton')
      .expect.element('@uploadFiles').text.to.equal('test.txt');
    browser.end();
  }
};

export default home;
