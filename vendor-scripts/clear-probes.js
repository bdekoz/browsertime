module.exports = async function(context, commands) {

  const script = `
  const {Services} = ChromeUtils.import("resource://gre/modules/Services.jsm");
  Services.telemetry.clearProbes();
  `;

  console.log("clear");
  const valueclear = await commands.js.runPrivileged(script);

  console.log("end pre-script setup");
};
