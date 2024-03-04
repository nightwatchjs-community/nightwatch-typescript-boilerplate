import path from 'path';

const filePath = path.join(path.resolve('.'), 'asset/test.txt');

describe('File Upload', function() {
  it('File Upload test', function() {
    const fileUploadPage = browser.page.FileUpload();

    fileUploadPage
      .navigate()
      .uploadFile('@fileUploadInput', filePath)
      // alternate way of passing an element instead of '@submitButton'
      .strictClick(fileUploadPage.elements.submitButton)
      .expect.element('@uploadFiles').text.to.equal('test.txt');

    browser.end();
  });
});
