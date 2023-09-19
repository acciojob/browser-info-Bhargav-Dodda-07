//your JS code here. If required.

function displayBrowserInfo() {
            // Get browser name and version from navigator object
            const browserName = navigator.appName;
            const version = navigator.appVersion;

            // Find the div element with id "browser-info"
            const browserInfoDiv = document.getElementById("browser-info");

            // Create a message with the browser name and version
            const message = "You are using " + browserName + " version " + version;

            // Display the message inside the div
            browserInfoDiv.textContent = message;
        }

window.onload = displayBrowserInfo;