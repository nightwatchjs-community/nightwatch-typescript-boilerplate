import {EnhancedPageObject, PageObjectModel} from 'nightwatch';

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
} satisfies PageObjectModel;

export interface FileUploadPage extends
  EnhancedPageObject<{}, typeof elements, {}, {}, () => string> {} // eslint-disable-line @typescript-eslint/ban-types

export default fileUpload;
