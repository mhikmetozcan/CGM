import homePage from "../pageobjects/home.page";
import physicianPage from "../pageobjects/physician.page";

describe('Verify Dr. Peter Test', () => {

  before('Navigate to Dr. Test\'s personal page', async () => {
    await browser.url('/');
    homePage.acceptCookies();
    homePage.search('peter test');
    homePage.selectDoctor();
  });

    it('should validate the doctors name', async () => {
      await expect(physicianPage.breadCrumb).toHaveText('Dr. Peter Test');
    });

    it('should validate physician\'s name and adress', async () => {
      await expect(physicianPage.physiciansName).toHaveText('Dr. Peter Test');
      await expect(physicianPage.houseNumberAndStreet).toHaveText('Blücherstraße 10');
      await expect(physicianPage.cityAndZIPCode).toHaveText('56564 Neuwied');
    });

    it('should validate the opening hours', async () => {
     const openingHoursExceptWednesday = `${await physicianPage.openingTimeInTheMorning} - ${await physicianPage.closingTimeInTheMorning} and ${await physicianPage.openingTimeInTheAfternoon} - ${await physicianPage.closingTimeInTheAfternoon}`;
     const openingHoursOnWednesday = `${await physicianPage.openingTimeInTheMorning} - ${await physicianPage.closingTimeInTheMorning}`;

      if(await physicianPage.today() === 'Mi.'){
        await expect(openingHoursOnWednesday).toBe(await physicianPage.openingHours(await physicianPage.today()));
      }else{
        await expect(openingHoursExceptWednesday).toBe(await physicianPage.openingHours(await physicianPage.today()));
      }
    
    })
    
});