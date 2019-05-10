module.exports = async function(context, commands) {

  const script = `
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
  const valueclear = await commands.js.runPrivileged(script);

  console.log("stop");
  //const valuestop = await commands.js.stop();

    //const driver = context.selenium.driver;
  //const valuestop = driver.quit();

  console.log("end pre-script actions");
};
