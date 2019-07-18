var chai = require('chai')
  , expect = chai.expect
  , path = require('path')

var webpack = require('../')

var file = path.join(__dirname, 'package-mains', 'dummy.js')


describe("packageMains", function () {

  it("captures module", function () {
    expect(webpack.resolve('./module', file)).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'module', 'src', 'index.js'))
  })

  it("uses configured packageMains, if provided", function () {
    expect(webpack.resolve('./webpack', file, { config: 'webpack.alt.config.js' })).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'webpack', 'index.js'))
  })

  it("always defers to module, regardless of config", function () {
    expect(webpack.resolve('./module', file, { config: 'webpack.alt.config.js' })).property('path')
      .to.equal(path.join(__dirname, 'package-mains', 'module', 'src', 'index.js'))
  })

})
