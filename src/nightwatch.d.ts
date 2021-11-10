import {NightwatchBrowser} from 'nightwatch';

declare global {
  const browser: typeof NightwatchBrowser;
}
