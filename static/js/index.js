// @todo actually set up ajax and json P request / response
// @todo set up alert:// url to alert instead of sending request

// bring in etherpad's jquery for some dom manipulation
var $ = require('ep_etherpad-lite/static/js/rjquery').$;

// postAceInit
// This is where we add buttons and such
// See the /index.js file and the templates directory.
exports.postAceInit = function(hook, context, cb){
  // iterate through settings, bind methods to buttons
  clientVars.actions.forEach( function(action){
    instantiateButton( action, context );
  });
};


// instantiateButton
// sets up a button with the propoer action
function instantiateButton( action, context ) {
  $('#'+action.id).click(function(e){
    // get the selection
    var selectedText = getSelection(context);
    // post to configured uri here!
     postSelection( selectedText, action.uri );
    // stop the click event default action (which would possibly deselect the selection)
    e.preventDefault();
  });
};

// postSelection
// posts selection to uri set in settings.json
function postSelection( selectedText, uri ) {
    console.log( "postSelection", selectedText );
    alert( "Post selection (see console) to " + uri );
};

// getSelection
// get the selected text from within the ace editor
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
        howMany =  rep.selEnd[0] - rep.selStart[0] + 1, // how many lines to grab
        // get only the lines in the selection
        linesAsArray = text.split("\n").splice( rep.selStart[0], howMany ),
        // when the startline and the end line are the same, we need to adjust
        selEnd = ( linesAsArray.length === 1 )? rep.selEnd[1]-rep.selStart[1] : rep.selEnd[1];

    // console.log( "how many lines?", rep.alines.length)
    // console.log( "howmany lines to grab?", howMany );
    console.log("selectionStarts on line: ", rep.selStart[0], "and col:", rep.selStart[1] );
    console.log("selectionEnds on line: ", rep.selEnd[0], "and col:", rep.selEnd[1] );


    // now get just the selected column
    linesAsArray[0] = linesAsArray[0].substr(rep.selStart[1],linesAsArray[0].length);
    linesAsArray[linesAsArray.length-1] = linesAsArray[linesAsArray.length-1].substr(0, selEnd);
    // put the text block back together from the array
    returnVal =  linesAsArray.join("\n").trim();
  },"getrep",true);
  return returnVal;
};

