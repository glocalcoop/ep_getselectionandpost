var $ = require('ep_etherpad-lite/static/js/rjquery').$;

exports.postAceInit = function(hook, context, cb){

  // lets make this a loop, and deal with all the buttons
  // make the buttons configurable in the settings file
  // label, uri, iconclass

  // bind method to post button
  $('.post-selection-button').click(function(e){
    // get the selection
    var selectedText = getSelection(context);
    // post to configured uri here!
    // console.log( ">>>>>", clientVars );
    postSelection( selectedText, clientVars.postSelectionURI );
    // stop the click event default action (which would possibly deselect the selection)
    e.preventDefault();
  });

};

exports.editorInfo = function(hook_name, context, cb) {
  console.log( 'editorInfo', hook_name, context, cb );
};

// postSelection
// posts selection to uri set in settings.json
function postSelection( selectedText, uri ) {
    console.log( "postSelection", selectedText );
    alert( "Post selection (see console) to " + uri );
};

function getSelection(context) {
  // console.log('getSelection', context);
  // not sure what the second argument of "callWithAce" (in this case  "getrep") is supposed to do
  // but its a part of the superscript and subscript plugins
  var returnVal = false;
  context.ace.callWithAce( function(ace) {
    // console.log("ace »»» ", ace);
    // rep holds information about the current selection
    var rep = ace.ace_getRep(),
        text = rep.alltext,
        howMany =  rep.selEnd[0]-1, // how many lines to grab
        // get only the lines in the selection
        linesAsArray = text.split("\n").splice( rep.selStart[0], howMany );
    // console.log( "how many lines?", rep.alines.length)
    // console.log( "howmany lines to grab?", howMany );
    // console.log("selectionStarts on line: ", rep.selStart[0], "and col:", rep.selStart[1] );
    // console.log("selectionEnds on line: ", rep.selEnd[0], "and col:", rep.selEnd[1] );

    // now get just the selected column
    linesAsArray[0] = linesAsArray[0].substr(rep.selStart[1],linesAsArray[0].length);
    linesAsArray[linesAsArray.length-1] = linesAsArray[linesAsArray.length-1].substr(0,rep.selEnd[1]);
    // put the text block back together from the array
    returnVal =  linesAsArray.join("\n").trim();
  },"getrep",true);

  return returnVal;

};
