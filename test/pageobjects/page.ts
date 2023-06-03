/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string) {
    return browser.url(`https://demo.clickdoc.de/cd-de/${path}`);
  }

    /**
   * wait until an element is clickable and perform a click
   * @param selector
   * @param parent
   */
    public async click(selector: WebdriverIO.Element, parent?: WebdriverIO.Element) {
      await this.el(selector, parent).waitForDisplayed();
      await this.el(selector, parent).waitForClickable();
      await this.el(selector, parent).click();
    }

  /**
   * click into an input and set a value
   * @param value a value to be set into the input field
   * @param selector
   * @param parent
   */
  public async setInputValue(value: string | number, selector: WebdriverIO.Element, parent?: WebdriverIO.Element) {
    await this.click(selector, parent);
    return (await this.select(selector, parent)).addValue(value);
  }

  /**
   * select method make sure that the element is rendered to the dom and visible
   * @param selector
   * @param parent
   */
  public async select(selector: WebdriverIO.Element, parent?: WebdriverIO.Element) {
    await this.el(selector, parent).waitForDisplayed();
    return this.el(selector, parent);
  }

  /**
   * get text after having selected the element
   * @param selector
   * @param parent
   * @returns
   */
  public async getText(selector: WebdriverIO.Element, parent?: WebdriverIO.Element):Promise<string> {
    const el = await this.select(selector, parent);
    return el.getText();
  }

  /**
   * select an element relative to a parent element or the DOM root if travel necessary
   * @param selector
   * @param parent parent elemtn
   * @returns {WebdriverIO.Element} the element that is targeted
   */
  private el(selector: WebdriverIO.Element, parent?: WebdriverIO.Element): WebdriverIO.Element {
    return parent ? parent.selector : selector;
  }
}