import {ElementProperties, NightwatchAPI} from 'nightwatch';

/**
 * A class-based custom-command in Nightwatch. The command name is the filename.
 *
 * Usage:
 *   browser.strictClick(selector)
 *
 * This command is being used in:
 *   test/fileUpload.ts
 * 
 * For more information on working with custom-commands see:
 *   https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
 */
export default class StrictClick {
  async command(this: {api: NightwatchAPI}, selector: string | ElementProperties) {
    await this.api.element.find(selector).waitUntil('visible');

    return this.api.click(selector);
  }
};
