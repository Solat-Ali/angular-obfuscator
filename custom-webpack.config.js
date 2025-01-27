var WebpackObfuscator = require('webpack-obfuscator');

// obfuscation presets (use whatever option in the "plugins" array below and compare "dist" folder "main.js" contents / file size)
var preset_default_obf_high_perf = require('./js-obfuscation-presets/default-obf-high-perf')
var preset_high_obf_low_perf= require('./js-obfuscation-presets/high-obf-low-perf')
var preset_medium_obf_opt_perf= require('./js-obfuscation-presets/medium-obf-optimal-perf')
var preset_low_obf_high_perf = require('./js-obfuscation-presets/low-obf-high-perf')

module.exports = {
  plugins: [
    new WebpackObfuscator(
      preset_default_obf_high_perf
      //preset_high_obf_low_perf
      //,preset_medium_obf_opt_perf
      //preset_low_obf_high_perf
    )
  ]
}