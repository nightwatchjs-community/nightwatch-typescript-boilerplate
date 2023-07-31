import {DragAndDropPage} from '../nightwatch/pages/DragAndDrop';
import {DropDownPage} from '../nightwatch/pages/Dropdown';
import {FileUploadPage} from '../nightwatch/pages/FileUpload';
import {iFramePage} from '../nightwatch/pages/IFrame';

declare module 'nightwatch' {
  interface NightwatchCustomPageObjects {
    DragAndDrop(): DragAndDropPage;
    Dropdown(): DropDownPage;
    FileUpload(): FileUploadPage;
    IFrame(): iFramePage;
  }
}
