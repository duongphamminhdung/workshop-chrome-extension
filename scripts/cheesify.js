function cheesify(tagname) {
  let Index = '';
  const tag = tagname;
  const collection = document.getElementsByTagName(tag);
  for (let i = 0; i < collection.length; i++) {
    temp = document.getElementsByTagName(tag)[i].innerHTML
    console.log(temp)
    if (temp.includes('<') ) {
      continue;
    }
    Index = Index + temp + "\n";
  }
  console.log(Index);
  alert("Open console to see the result");

}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
  // Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify(request.TAGNAME);
  }
);
