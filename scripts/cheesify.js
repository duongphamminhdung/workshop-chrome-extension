function foodify(tagname, food) {
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
        for (let j = 0; j < 1000; j++) {
          contentBox = contentBox.replace("\n", " ");
        }
        for (let i = 0; i < contentBox.length; i++) {
          if (contentBox[i] === '.') {
            count -= 1;
          }
          if (count == 0){
            Index = Index + "\n";
            count = 10;
          }
          Index = Index + contentBox[i];
        }
      //inject paragraph that was translated by js in stv
    }
    
    console.log(Index);
    downloadToFile(Index);

  }
// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
  // Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'foodify') foodify(request.TAGNAME, request.FOOD);
  }
);

function downloadToFile(text) {   
  chrome.runtime.sendMessage({action: "download", fileDownload: text});
  console.log("download request sent")
}