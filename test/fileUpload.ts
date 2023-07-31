import {NightwatchTests} from 'nightwatch';
import path from 'path';

const filePath = path.join(path.resolve('.'), 'asset/test.txt');

const home: NightwatchTests = {
  'File Upload test': () => {
    const fileUpload = browser.page.FileUpload();
    fileUpload
      .navigate()
      .uploadFile('@fileUploadInput', filePath)
      .strictClick(fileUpload.elements.submitButton)
      .expect.element('@uploadFiles').text.to.equal('test.txt');
    browser.end();
  }
};

export default home;
