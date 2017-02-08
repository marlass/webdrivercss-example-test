var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
}).init()

require('webdrivercss').init(client, {
    screenshotRoot: 'my-shots',
    failedComparisonsRoot: 'diffs',
    misMatchTolerance: 1.05,
    screenWidth: [320,480,640,1024]
})


client
    .windowHandleMaximize(false)
    .url('https://enea.pl')
    .pause(2000)
    .webdrivercss('enea',{
        name: 'test',
        screenWidth: [320,480,640,1024]
    })

client
    .url('https://enea.pl/fachowiec')
    .pause(2000)
    .webdrivercss('enea',{
        name: 'fachowiec',
        screenWidth: [1600],
        exclude: ['.specialist__offerbanner']
    })

client
    .url('https://enea.pl/zdrowie')
    .pause(2000)
    .webdrivercss('eneazdrowie',{
        name: 'zdrowie',
        elem: ['.health__offerbanner'],
        screenWidth: [1600]
    })
    .end()
