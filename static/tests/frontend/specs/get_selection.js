describe("get selection", function(){

  //create a new pad before each test run
  beforeEach(function(cb){
    helper.newPad(cb);
    this.timeout(60000);
  });

  it("gets the currently selected text", function(done) {
    var inner$ = helper.padInner$;
    var chrome$ = helper.padChrome$;

    //get the first text element out of the inner iframe
    var $firstTextElement = inner$("div").first();

    // set the text, so we can compare it later.
    $firstTextElement.text("Do the glocalmotion with me…");

    //select this text element
    $firstTextElement.sendkeys('{selectall}');

    //get the "get selection" button and click it
    var $copySelectionButton = chrome$(".buttonicon-copy-selection");
    $copySelectionButton.click();

    //ace creates a new dom element when you press a button, so just get the first text element again
    var $newFirstTextElement = inner$("div").first();

    // is there a the  element now?
    var didItWork = $newFirstTextElement.text() === $firstTextElement.text();

    //expect it to be bold
    expect(isBold).to.be(true);

    //make sure the text hasn't changed
    expect($newFirstTextElement.text()).to.eql($firstTextElement.text());

    done();
  });

  it("makes text bold on keypress", function(done) {
    var inner$ = helper.padInner$;
    var chrome$ = helper.padChrome$;

    //get the first text element out of the inner iframe
    var $firstTextElement = inner$("div").first();

    //select this text element
    $firstTextElement.sendkeys('{selectall}');
    if(inner$.browser.mozilla){ // if it's a mozilla browser
      var evtType = "keypress";
    }else{
      var evtType = "keydown";
    }

    var e = inner$.Event(evtType);
    e.ctrlKey = true; // Control key
    e.which = 66; // b
    inner$("#innerdocbody").trigger(e);

    //ace creates a new dom element when you press a button, so just get the first text element again
    var $newFirstTextElement = inner$("div").first();

    // is there a <b> element now?
    var isBold = $newFirstTextElement.find("b").length === 1;

    //expect it to be bold
    expect(isBold).to.be(true);

    //make sure the text hasn't changed
    expect($newFirstTextElement.text()).to.eql($firstTextElement.text());

    done();
  });
});
