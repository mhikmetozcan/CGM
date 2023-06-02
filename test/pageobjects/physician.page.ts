import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PhysicianPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get breadCrumb() {
    return $('[data-automation="Breadcrumb - PhysicianProfile"]');
  }

  public get physiciansName() {
    return $('[class="text-wrap header__content--title"]');
  }

  public get houseNumberAndStreet() {
    return $('[data-automation="Address - Street House"]');
  }

  public get cityAndZIPCode() {
    return $('[data-automation="Address - Postal city code"]');
  }

  public get currentDay() {
    return $('[class="text-day__item--text current-date"]');
  }

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

  public get openingTimeInTheMorning() {
    return $('[class="text-day-hours-container__items current-date ng-star-inserted"]').$('[class="text-day-hour__text-startTime"]').getText();
  }

  public get closingTimeInTheMorning() {
    return $('[class="text-day-hours-container__items current-date ng-star-inserted"]').$('[class="text-day-hour__text-endTime"]').getText();
  }

  public get openingTimeInTheAfternoon() {
    return $('[class="text-day-hour__item ng-star-inserted"]').$('[class="text-day-hour__text-startTime"]').getText();
  }

  public get closingTimeInTheAfternoon() {
    return $('[class="text-day-hour__item ng-star-inserted"]').$('[class="text-day-hour__text-endTime"]').getText();
  }

  public get today() {
    return this.currentDay.getText();
  }

  public get openingHoursExceptWednesday() {
    return `${this.openingTimeInTheMorning} - ${this.closingTimeInTheMorning} and ${this.openingTimeInTheAfternoon} - ${this.closingTimeInTheAfternoon}`;
  }

  public get openingHoursOnWednesday() {
    return `${this.openingTimeInTheMorning} - ${this.closingTimeInTheMorning}`;
  }
  //public openingHoursExceptWednesday = `${this.openingTimeInTheMorning} - ${this.closingTimeInTheMorning} and ${this.openingTimeInTheAfternoon} - ${this.closingTimeInTheAfternoon}`;

  //public openingHoursOnWednesday = `${this.openingTimeInTheMorning} - ${this.closingTimeOnWednesday}`;
}

export default new PhysicianPage();
