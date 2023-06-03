import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class HomePage extends Page {

    /**
   * get method for factory design pattern
   */
    public static get() {
      return new HomePage();
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
        timeout: 20000,
        timeoutMsg: "the doctor you searched for was not found",
      }
    );
    (await this.drPeterTest).click();
  }
}
