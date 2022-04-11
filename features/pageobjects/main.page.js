const Page = require('./page');

class MainPage extends Page {

    get inputFirst () {
        return $('//input[@ng-model="first"]');
    }

    get inputSecond () {
        return $('//input[@ng-model="second"]');
    }

    get btnGo () {
        return $('//button[@id="gobutton"]');
    }

    get selectOperator(){
        return $('//select[@ng-model="operator"]');
    }

    get labelAnswer () {
        return $('//h2[@class="ng-binding"]');
    }

    async FillTextFields (firstValue, secondValue) {
        await this.inputFirst.setValue(firstValue);
        await this.inputSecond.setValue(secondValue);
    }

    async ChooseOperator (operator) {
        await this.selectOperator.selectByVisibleText(operator)
    }

    async ClickGoButton () {
        await this.btnGo.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('protractor-demo');
    }
}

module.exports = new MainPage();
