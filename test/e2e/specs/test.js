// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      // ensure the list is loaded
      .assert.elementPresent('.browseListing')
      // check all images are loaded 20 images from the cars + hero + logo + avatar = 23
      .assert.elementCount('img', 23)
      .end()
  }
}
