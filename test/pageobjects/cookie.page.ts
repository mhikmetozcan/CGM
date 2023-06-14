import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class CookiePage extends Page {

  /**
   * get method for factory design pattern
   */
  public static get() {
    return new CookiePage();
  }

  /**
   * Get Accept Cookies button
   * @returns {WebdriverIO.Element} accept cookies button from cookies window
   */
  public get acceptCookiesButton(): Promise<WebdriverIO.Element> {
    return $("button*=Alle akzeptieren");
  }

  /**
   * Accept cookies
   */
  public async acceptCookies() {
    (await this.acceptCookiesButton).click();
  }
}