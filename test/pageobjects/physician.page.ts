import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class PhysicianPage extends Page {

    /**
   * get method for factory design pattern
   */
    public static get() {
      return new PhysicianPage();
    }

  /**
   * Get the doctor's name from the bread crumb section
   * @returns {WebdriverIO.Element} The element from bread crumb section that contains doctor's name
   */
  public get breadCrumb():Promise<WebdriverIO.Element> {
    return $('[data-automation="Breadcrumb - PhysicianProfile"]');
  }

  /**
   * Get the doctor's name from the profile section
   * @returns {WebdriverIO.Element} The element from the proflie section that contains doctor's name
   */
  public get physiciansName():Promise<WebdriverIO.Element> {
    return $('[class="text-wrap header__content--title"]');
  }

  /**
   * Get the doctor's street and house number
   * @returns {WebdriverIO.Element} The element that has doctor's street and house number
   */
  public get houseNumberAndStreet():Promise<WebdriverIO.Element> {
    return $('[data-automation="Address - Street House"]');
  }

  /**
   * Get the doctor's city and zip code
   * @returns {WebdriverIO.Element} The element that has doctor's city and zip code
   */
  public get cityAndZIPCode():Promise<WebdriverIO.Element> {
    return $('[data-automation="Address - Postal city code"]');
  }

  /**
   * Get the current day from UI
   * @returns {WebdriverIO.Element} The Element that contains the current day in the openning hours section
   */
  public get currentDay():Promise<WebdriverIO.Element> {
    return $('[class="text-day__item--text current-date"]');
  }

  /**
   * Compose the openning hours to be used for comparisons
   * @param today is the day of the week recieved from UI
   * @returns {string} the complete opening hours depending on the day of the week
   */
  public async openingHours(today: string): Promise<string | undefined> {
    switch (today) {
      case "Mo.":
      case "Di.":
      case "Do.":
      case "Fr.":
        return "09:00 Uhr - 12:00 Uhr and 14:00 Uhr - 18:00 Uhr";
      case "Mi.":
        return "09:00 Uhr - 14:00 Uhr";
      default:
        return undefined;
    }
  }

  /**
   * Get the opening time in the morning
   * @returns {string} opening time in the morning
   */
  public get openingTimeInTheMorning():Promise<string> {
    return $('[class="text-day-hours-container__items current-date ng-star-inserted"]').$('[class="text-day-hour__text-startTime"]').getText();
  }

  /**
   * Get the closing time in the morning
   * @returns {string} closing time in the morning
   */
  public get closingTimeInTheMorning():Promise<string> {
    return $('[class="text-day-hours-container__items current-date ng-star-inserted"]').$('[class="text-day-hour__text-endTime"]').getText();
  }

  /**
   * Get the openimg time in the afternoon
   * @returns {string} opening time in the afternoon
   */
  public get openingTimeInTheAfternoon():Promise<string> {
    return $('[class="text-day-hour__item ng-star-inserted"]').$('[class="text-day-hour__text-startTime"]').getText();
  }
  
  /**
   * Get the closing time in the afternoon
   * @returns {string} closing time in the afternoon
   */
  public get closingTimeInTheAfternoon():Promise<string> {
    return $('[class="text-day-hour__item ng-star-inserted"]').$('[class="text-day-hour__text-endTime"]').getText();
  }

}
