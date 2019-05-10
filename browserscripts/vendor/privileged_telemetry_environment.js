(function() {
  const {TelemetryEnvironment} = ChromeUtils.import("resource://gre/modules/TelemetryEnvironment.jsm");
  let env = TelemetryEnvironment.currentEnvironment;
  return JSON.stringify(env);
})();
