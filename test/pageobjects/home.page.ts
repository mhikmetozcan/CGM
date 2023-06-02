import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get acceptCookiesButton() {
    return $("button*=Alle akzeptieren");
  }

  public get searchBox() {
    return $('input[placeholder="Fachbereich, Name des Arztes, Praxis oder Einrichtung"]');
  }

  public get drPeterTest() {
    return $('(//span[.="Peter Test"]/../../following-sibling::div/span[@class="search-card-city ng-star-inserted"])[contains(., "Neuwied")]');
  }
  public async acceptCookies() {
    (await this.acceptCookiesButton).click();
  }

  public async search(searchTerm: string | number) {
    await this.searchBox.addValue(searchTerm);
  }

  public async selectDoctor() {
    await browser.waitUntil(this.drPeterTest?.isDisplayed);
    await this.drPeterTest?.click();
  }
}

export default new HomePage();
