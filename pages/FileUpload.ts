import {EnhancedPageObject} from 'nightwatch';

const elements = {
  fileUploadInput: element('input#file-upload'),
  submitButton: element('input#file-submit'),
  uploadFiles: element('#uploaded-files')
};

const fileUpload = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/upload`;
  },
  elements
};

export default fileUpload;

export type FileUploadPage = EnhancedPageObject<typeof fileUpload>;
