import Page from "./page";

enum doctor{
  name='Peter Test',
  city='Neuwied'
}

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
  public get doctorWithCity(): Promise<WebdriverIO.Element> {
    return $(
      //`(//span[.='${doctor.name}']/../../following-sibling::div/span[@class="search-card-city ng-star-inserted"])[contains(., '${doctor.city}')]`
        '.search-physician-card.highLight:nth-child(1) .search-card-physician-name .text-highlight'
      );
  }

  /**
   * insert the desired search term into the seach box
   * @param searchTerm {string | number} the subject that is desired to be searched
   */
  public async search(searchTerm: string | number) {
    await this.setInputValue(searchTerm, await this.searchBox);
  }

}