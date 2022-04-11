module.exports = class Page {
    open (path) {
        return browser.url(`http://juliemr.github.io/${path}`)
    }
}
