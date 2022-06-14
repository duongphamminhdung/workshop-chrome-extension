// scripts/popup.js

// Send a message to the active tab to 'cheesify' it
function sendCheesifyMsg(tagname, food) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'foodify', TAGNAME : tagname, FOOD : food })  });
}
function prepareForSending(food) {
  let tagname = document.getElementById("inputTagName").value;
  sendCheesifyMsg(tagname, food);
}
// Trigger the function above when clicking the 'Cheesify' button
document.querySelector('#cheesify').addEventListener('click', event => prepareForSending('cheese'));
document.querySelector('#milkify').addEventListener('click', event => prepareForSending('milk'));

// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
