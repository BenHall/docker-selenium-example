function detectBrowser(name) {
  require('webdriverjs')
  .remote({
    host: 'b2d',
    desiredCapabilities: {
      browserName: name
    }
  })
  .init()
  .url('http://www.whatismybrowser.com/')
  .getText('.string-major', function(err, text) {
    console.log(name + 'browser was detected as ' + text);
  })
  .end();
}

['chrome', 'firefox'].forEach(detectBrowser);
