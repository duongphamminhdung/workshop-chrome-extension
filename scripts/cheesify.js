function cheesify(tagname, food) {
      if (food === 'cheese') {
        let Index = '';
        const tag = tagname;
        console.log(tag)
        const collection = document.getElementsByTagName(tag);
        for (let i = 0; i < collection.length; i++) {
          temp = collection[i].innerHTML;
          console.log(temp);
          if (temp.includes('<') ) {
          continue;
          }
          Index = Index + temp + "\n";
        }
        //inject paragraph of pages that was translated direcly
      }


      else if (food === 'milk') {
        contentBox = document.getElementsByClassName("contentbox")[1].innerText;
        Index = '';
        count = 10;
        for (let i = 0; i < contentBox.length; i++) {
          if (contentBox[i] == "\ ".substring(0, 10) && contentBox[i+1] == "n") {
            contentBox = contentBox.replace(contentBox[i], ' ');
          }
          if (contentBox[i] === '.') {
            count -= 1;
          }
          if (count == 0){
            Index = Index + "\n";
            count = 10;
          }
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
