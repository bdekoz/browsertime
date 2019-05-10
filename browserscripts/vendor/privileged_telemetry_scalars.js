(function() {
  const {Services} = ChromeUtils.import("resource://gre/modules/Services.jsm");
    const scalars = Services.telemetry.getSnapshotForScalars();
    return JSON.stringify(scalars);
})();
