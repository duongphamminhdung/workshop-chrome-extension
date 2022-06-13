function cheesify(tagname, food) {
    let Index = '';
    let count = 10;
    const tag = tagname;
    console.log(tag)
    const collection = document.getElementsByTagName(tag);
    for (let i = 0; i < collection.length; i++) {
      temp = collection[i].innerHTML;
      console.log(temp);
      if (food === 'cheese') {
        if (temp.includes('<') ) {
          continue;
        }
        Index = Index + temp + "\n";
      }
      //inject paragraph of pages that was translated direcly
      else if (food === 'milk') {
        if (count == 0) {
          Index = Index + "\n" + "\n";
          count = 10;
        }
        Index = Index + temp + " ";
        count = count - 1;
      }
      //inject paragraph that was translated by js in stv
    }
    
    console.log(Index);
    alert("Open console to see the result");
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
  // Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify(request.TAGNAME, request.FOOD);
  }
);
