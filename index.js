// settings: load up the etherpad settings
var settings =  eejs = require("ep_etherpad-lite/node/utils/settings");

// eejs for templating
var eejs = require("ep_etherpad-lite/node/eejs/");

// set up settings for the plugins, adding directly to settings.php for now
// doesn't seem PATHTOETHERPAD/admin/plugins is quite working right now.
exports.clientVars = function( hook_name, args, cb ) {
  return cb({ "postSelectionURI": settings.ep_copyselectionandpost.postSelectionURI });
}

// add buton to the nav bar (see template file below)
exports.eejsBlock_editbarMenuRight = function(hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_copyselectionandpost/templates/editbarButtons.ejs");
  return cb();
}

// add menu link
exports.eejsBlock_dd_format = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_copyselectionandpost/templates/fileMenu.ejs");
  return cb();
}
