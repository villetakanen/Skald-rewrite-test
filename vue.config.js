var manifestJSON = require('./public/manifest.json')

module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: 'false'
    },
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color
  }
}
