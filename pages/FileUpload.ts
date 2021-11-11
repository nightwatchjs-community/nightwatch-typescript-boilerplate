import {EnhancedPageObject} from 'nightwatch';

const elements = {
  fileUploadInput: 'input#file-upload',
  submitButton: 'input#file-submit',
  uploadFiles: '#uploaded-files'
};

const fileUpload = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}/upload`;
  },
  elements
};

export default fileUpload;

export type FileUploadPage = EnhancedPageObject<typeof fileUpload>; 
