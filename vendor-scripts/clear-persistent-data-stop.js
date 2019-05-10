'use strict';

module.exports = async function(context, commands) {

  // Step 1: go to blank page and await further instructions.
  await commands.navigate("about:blank");

  // XXX does the process need to be "content" for GV?
    
  // Step 2: clear 
  const scriptclear = `
  const {Services} = ChromeUtils.import("resource://gre/modules/Services.jsm");

  // Clear the scalars for all processes.
  Services.telemetry.getSnapshotForScalars("main", true);
  Services.telemetry.getSnapshotForKeyedScalars("main", true);

  // Clear the histograms for all processes.
  Services.telemetry.getSnapshotForHistograms("main", true);
  Services.telemetry.getSnapshotForKeyedHistograms("main", true);

  Services.telemetry.clearProbes();

  const TelemetryGeckoView = Cc["@mozilla.org/telemetry/geckoview-testing;1"].createInstance(Ci.nsITelemetryGeckoViewTesting);

  TelemetryGeckoView.clearPersistenceData();

  // Force persisting the measurements to file.
  TelemetryGeckoView.forcePersist();
  TelemetryGeckoView.deInitPersistence();

  // Start the persistence system again, to unpersist the data.
  TelemetryGeckoView.initPersistence();
  `;

  console.log("persist clear");
  const vclear = await commands.js.runPrivileged(scriptclear);

  // Step 3: stop    
  console.log("stop");

  // BZ Marionette: Quit only works on desktop
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1298921  
  //const driver = context.selenium.driver;
  //const valuestop = driver.quit();

  const scriptstop = `
  const {Services} = ChromeUtils.import("resource://gre/modules/Services.jsm");
  Services.startup.quit(Ci.nsIAppStartup.eForceQuit);
  `;

  const vstop = await commands.js.runPrivileged(scriptstop);    


  console.log("end pre-script actions");
};
