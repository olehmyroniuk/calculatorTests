const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pageobjects/main.page');

const pages = {
    main: MainPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I enter first number (\w+) and second number (.+)$/, async (firstValue, secondValue) => {
    await MainPage.FillTextFields(firstValue, secondValue)
});

When(/^I click Go button$/, async () => {
    await MainPage.ClickGoButton()
});

When(/^I select operator (.+)$/, async (operator) => {
    await MainPage.ChooseOperator(operator)
});

Then(/^I should see result - (.*)$/, async (answer) => {
    await expect(MainPage.labelAnswer).toBeExisting();
    await expect(MainPage.labelAnswer).toHaveTextContaining(answer);
});

