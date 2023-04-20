const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
console.log("In the install.js folder");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  console.log("Clicked the button!");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  alert("Successfully installed!");
  console.log("👍", "appinstalled", event);
});
