





window.urlToVisit = "";


var redditCheck = new RegExp("^/r/");
var githubCheck = new RegExp("^/git$");
var amsCheck = new RegExp("^/ams$");
var ptpCheck = new RegExp("^/ptp$");
var redCheck = new RegExp("^/red$");
var abtvCheck = new RegExp("^/abtv$");
var griffithCheck = new RegExp("^/grif$");
var whatboxCheck = new RegExp("^/what$");
var youtubeCheck = new RegExp("^/yt/");
var bCheck = new RegExp("^/b/$");


var bandcampCheck = new RegExp("^/bc$");
var mdnCheck = new RegExp("^/mdn$");
var w3Check = new RegExp("^/w3$");
var codepenCheck = new RegExp("^/cpen$");
var stackoverflowCheck = new RegExp("^/stack$");
var btnCheck = new RegExp("^/btn$");


window.redditURL = "https://reddit.com";
window.githubURL = "https://github.com";
window.amsURL = "https://ams.ausport.gov.au/asc";
window.ptpURL = "https://passthepopcorn.me";
window.redURL = "https://redacted.ch";
window.abtvURL = "https://animebytes.tv";
window.griffithURL = "https://my.griffith.edu.au";
window.whatboxURL = "https://whatbox.ca/manage";
window.ddgURL = "https://ddg.gg/";
window.youtubeURL = "https://youtube.com/results?search_query=";
window.bURL = "https://boards.4chan.org/b/";

window.bandcampURL = "https://bandcamp.com";
window.mdnURL = "https://developer.mozilla.org/en-US";
window.w3URL = "https://w3schools.com";
window.codepenURL = "https://codepen.io";
window.stackoverflowURL = "https://stackoverflow.com";
window.btnURL = "https://broadcasthe.net";


function textSubmit() {
//  alert ("pressing enter works");
  document.getElementById("textbox");

  var inputBoxText = document.getElementById("textbox").value;
  var goToReddit = redditCheck.test(inputBoxText);
  var goToGithub = githubCheck.test(inputBoxText);
  var goToAMS = amsCheck.test(inputBoxText);
  var goToPTP = ptpCheck.test(inputBoxText);
  var goToRED = redCheck.test(inputBoxText);
  var goToABTV = abtvCheck.test(inputBoxText);
  var goToGriffith = griffithCheck.test(inputBoxText);
  var goToWhatbox = whatboxCheck.test(inputBoxText);
  var goToYoutube = youtubeCheck.test(inputBoxText);
  var goToB = bCheck.test(inputBoxText);


  var goToBandcamp = bandcampCheck.test(inputBoxText);
  var goToMDN = mdnCheck.test(inputBoxText);
  var goToW3 = w3Check.test(inputBoxText);
  var goToCodepen = codepenCheck.test(inputBoxText);
  var goToStackoverflow = stackoverflowCheck.test(inputBoxText);
  var goToBTN = btnCheck.test(inputBoxText);


  if (goToReddit){
    window.urlToVisit = redditURL.concat(inputBoxText);
    document.location.replace(window.urlToVisit);
    return false;
      } else if (goToYoutube){
    var searchQueryText = inputBoxText.substr(4);
    window.urlToVisit = youtubeURL.concat(searchQueryText);
    document.location.replace(window.urlToVisit);
      } else if (goToGithub){
    document.location.replace(githubURL);
    return false;
      } else if (goToAMS){
    document.location.replace(amsURL);
    return false;
      } else if (goToPTP){
    document.location.replace(ptpURL);
    return false;
      } else if (goToRED){
    document.location.replace(redURL);
    return false;
      } else if (goToABTV){
    document.location.replace(abtvURL);
    return false;
      } else if (goToGriffith){
    document.location.replace(griffithURL);
    return false;
      } else if (goToWhatbox){
    document.location.replace(whatboxURL);
    return false;
      } else if (goToB){
    document.location.replace(bURL);
    return false; 
      } else if (goToBandcamp){
    document.location.replace(bandcampURL);
    return false;
      } else if (goToMDN){
    document.location.replace(mdnURL);
    return false;
      } else if (goToW3){
    document.location.replace(w3URL);
    return false;
      } else if (goToCodepen){
    document.location.replace(codepenURL);
    return false;
      } else if (goToStackoverflow){
    document.location.replace(stackoverflowURL);
    return false;
      } else if (goToBTN){
    document.location.replace(btnURL);
    return false;
      } else {
    window.urlToVisit = ddgURL.concat(inputBoxText);
    document.location.replace(window.urlToVisit);
    return false;

  }



}




function textUpdate() {
var inputBoxText = document.getElementById("textbox").value;
var goToReddit = redditCheck.test(inputBoxText);
var goToGithub = githubCheck.test(inputBoxText);
var goToAMS = amsCheck.test(inputBoxText);
var goToPTP = ptpCheck.test(inputBoxText);
var goToRED = redCheck.test(inputBoxText);
var goToABTV = abtvCheck.test(inputBoxText);
var goToGriffith = griffithCheck.test(inputBoxText);
var goToWhatbox = whatboxCheck.test(inputBoxText);
var goToYoutube = youtubeCheck.test(inputBoxText);
var goToB = bCheck.test(inputBoxText);




if (goToReddit){
  console.log ("regex detected /r/, will load reddit");
}

if (goToGithub){
  console.log ("regex detected /git, will load github");
}
}




/*
        switch (inputBoxText) {
            case "test1":
                console.log("hello world")
                break
            case "test2":
                console.log("hey mate")
                break
            case "/r/":
                console.log("reddit time")
                urlToVisit = "https://reddit.com"
                break
            default:
                console.log (inputBoxText);
                urlToVisit = "";
        }
        
    }
*/




/*    function textSubmit() {
      switch (currentFunction) {
        case "reddit":
        document.location.replace("https://reddit.com" + inputBoxText);
        break
      default:
        alert("nothing");
      }
*/








