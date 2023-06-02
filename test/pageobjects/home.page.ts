import { Element } from "webdriverio";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * Get Accept Cookies button
   * @returns {WebdriverIO.Element} accept cookies button from cookies window
   */
  public get acceptCookiesButton(): Promise<WebdriverIO.Element> {
    return $("button*=Alle akzeptieren");
  }

  /**
   * Get the searchbox
   * @returns {WebdriverIO.Element} searchbox on the homepage
   */
  public get searchBox(): Promise<WebdriverIO.Element> {
    return $(
      'input[placeholder="Fachbereich, Name des Arztes, Praxis oder Einrichtung"]'
    );
  }

  /**
   * Get the desired doctor from the search results
   * @returns {WebdriverIO.Element} the doctor with the correct location
   */
  public get drPeterTest(): Promise<WebdriverIO.Element> {
    return $(
      '(//span[.="Peter Test"]/../../following-sibling::div/span[@class="search-card-city ng-star-inserted"])[contains(., "Neuwied")]'
    );
  }

  /**
   * Accept cookies
   */
  public async acceptCookies() {
    (await this.acceptCookiesButton).click();
  }

  /**
   * insert the desired search term into the seach box
   * @param searchTerm {string | number} the subject that is desired to be searched
   */
  public async search(searchTerm: string | number) {
    await (await this.searchBox).addValue(searchTerm);
  }
  /**
   * Choose the desired doctor among the appeared options
   * Wait until the search values become visible before clicking
   */
  public async selectDoctor() {
    await browser.waitUntil(
      async () => (await this.drPeterTest).isDisplayed(),
      {
        timeout: 10000,
        timeoutMsg: "the doctor you searched for was not found",
      }
    );
    (await this.drPeterTest).click();
  }
}

export default new HomePage();
