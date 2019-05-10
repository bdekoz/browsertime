(function() {
  const {Services} = ChromeUtils.import("resource://gre/modules/Services.jsm");

  // from nsITelemetry.idl
  // let snapshot = Telemetry.getSnapshotForHistograms();
  // let values = snapshot[process]["FX_PAGE_LOAD_MS_2"].values;
  // return Services.telemetry.getSnapshotForHistograms();

  const histograms = Services.telemetry.getSnapshotForHistograms();
  if (!histograms)
    console.log("failed to snapshot histograms");

  return JSON.stringify(histograms);
})();
