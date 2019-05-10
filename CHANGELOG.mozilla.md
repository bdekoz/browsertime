# Browsertime ChangeLog Mozilla

## 2019-05-04
* vendor-scripts/clear-persistent-data-stop.js: Attempt two.


## 2019-05-04

* vendor-scripts/clear-probes.js: 
* vendor-scripts/clear-probes-stop.js: 
* vendor-scripts/clear-persistent-data-stop.js
New scripts for clearing persistent telemetry data

## 2019-05-03

* lib/firefox/webdriver/firefoxPreferences.js: Tweak prefs.

## 2019-04-26

* browserscripts/vendor/privileged_telemetry_environment.js: Dump state.
* browserscripts/vendor/privileged_telemetry_histograms.js: Same.
* browserscripts/vendor/privileged_telemetry_scalars.js: Same.xs

* browsersupport/fenix-profile: New.
* browsersupport/gve-profile: New.
* condition_profile.sh: Add support for fenix, gve.

* lib/firefox/webdriver/firefoxPreferences.js: Add prefs.
* one.bkoz.sh: Add in chrome non-wrapper, gve, firetv's.

## 2019-04-26

* browserscripts/privileged: To...
* browserscripts/vendor: ...here.
* condition_profile.sh: Enable fenix.


## 2019-04-24

* lib/firefox/webdriver/firefoxPreferences.js: Update.


## 2019-04-24

* browserscripts/privileged: Add scripts, WIP.
* condition_profile.sh: Enable for firefox.tv.
* lib/firefox/webdriver/firefoxPreferences.js: Set GeckoView
  persistence thresholds to 3 sec from 60.


## 2019-04-19
### Browsertime x privileged JS x telemetry

* firefox_privileged_javascript.js
* lib/core/engine/command/javaScript.js
* lib/core/seleniumRunner.js
  from Nick Alexander

* lib/firefox/webdriver/firefoxPreferences.js
  Turn on telemetry

* npm-shrinkwrap.json
* package.json
  F29 node installs

* vendor-scripts
  Javascript files.

* condition_profile.sh
* one.bkoz.sh
  Add support for fenix

* run-one.firetv-stick-4k-devpac.sh
* run-one.firetv-stick-4k-devpac.script-1.sh
* run-one.firetv-stick-4k-devpac.script-2.sh
  Scripts for running in SF test environment