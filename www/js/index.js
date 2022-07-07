// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");

  setTimeout(function () {
    cordova.exec(success, null, "CordovaIntentPlugin", "coolMethod", [
      "moeenchanna",
      "123123123",
    ]);
  }, 1000);
}

function success(result) {
  alert(result);
}
