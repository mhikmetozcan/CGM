import HomePage from "../pageobjects/home.page";
import PhysicianPage from "../pageobjects/physician.page";
import CookiePage from "../pageobjects/cookie.page";

const SEARCH_TERM = 'peter test';
const COOKIES = CookiePage.get();
const HOME_PAGE = HomePage.get();
const PHYSICIAN = PhysicianPage.get();
enum doctor {
  name = 'Dr. Peter Test',
  street = 'Blücherstraße 10',
  city = 'Neuwied',
  zip = '56564'
}

describe('Verify Dr. Peter Test', () => {

  before('Navigate to Dr. Test\'s personal page', async () => {

    
    await browser.url('/');
    await COOKIES.acceptCookies();
    await HOME_PAGE.search(SEARCH_TERM);
    await HOME_PAGE.selectDoctor();
  });

    it('should validate the doctors name', async () => {
      await expect(PHYSICIAN.breadCrumb).toHaveText(doctor.name);
    });

    it('should validate physician\'s name and adress', async () => {
      await expect(PHYSICIAN.physiciansName).toHaveText(doctor.name);
      await expect(PHYSICIAN.houseNumberAndStreet).toHaveText(doctor.street);
      await expect(PHYSICIAN.cityAndZIPCode).toHaveText(`${doctor.zip} ${doctor.city}`);
    });

    xit('should validate the opening hours', async () => {
     const OPENING_HOURS_EXCEPT_WED = `${await PHYSICIAN.openingTimeInTheMorning} - ${await PHYSICIAN.closingTimeInTheMorning} and ${await PHYSICIAN.openingTimeInTheAfternoon} - ${await PHYSICIAN.closingTimeInTheAfternoon}`;
     const OPENING_HOURS_ON_WED = `${await PHYSICIAN.openingTimeInTheMorning} - ${await PHYSICIAN.closingTimeInTheMorning}`;

      if(await PHYSICIAN.today() === 'Mi.'){
        await expect(OPENING_HOURS_ON_WED).toBe(await PHYSICIAN.openingHours(await PHYSICIAN.today()));
      }else{
        await expect(OPENING_HOURS_EXCEPT_WED).toBe(await PHYSICIAN.openingHours(await PHYSICIAN.today()));
      }
    
    })
    
});