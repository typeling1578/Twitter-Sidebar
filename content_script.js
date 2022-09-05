let elem = document.createElement("script");
elem.src = browser.runtime.getURL("inject.js");
document.documentElement.appendChild(elem);
