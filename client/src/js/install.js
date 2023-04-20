const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
console.log("In the install.js folder");

// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener("beforeinstallprompt", (event) => {
//   window.deferredPrompt = event;
//   butInstall.classList.toggle("hidden", false);
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener("click", async () => {
//   const promptEvent = window.deferredPrompt;

//   if (!promptEvent) {
//     return;
//   }

//   promptEvent.prompt();

//   window.deferredPrompt = null;

//   butInstall.classList.toggle("hidden", true);
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener("appinstalled", (event) => {
//   window.deferredPrompt = null;
// });

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";
  alert("Click the button to install!");

  butInstall.addEventListener("click", () => {
    console.log("Clicked the button!");
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});

window.addEventListener("appinstalled", (event) => {
  alert("Successfully installed!");
  console.log("👍", "appinstalled", event);
});
