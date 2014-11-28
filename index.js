// settings: load up the etherpad settings
var settings =  eejs = require("ep_etherpad-lite/node/utils/settings");

// eejs for templating
var eejs = require("ep_etherpad-lite/node/eejs/");

// set up settings for the plugins, adding directly to settings.php for now
// doesn't seem PATHTOETHERPAD/admin/plugins is quite working right now.
exports.clientVars = function( hook_name, args, cb ) {
  return cb({ "actions": settings.ep_getselectionandpost.actions });
}

// add buton to the nav bar (see template file below)
exports.eejsBlock_editbarMenuRight = function( hook_name, context, cb) {
  // console.log( hook_name, context );
  context.content = context.content + eejs.require("ep_getselectionandpost/templates/editbarButtons.ejs");
  return cb();
}

// add menu link
exports.eejsBlock_dd_format = function ( hook_name, context, cb) {
  // console.log( hook_name, context );
  context.content = context.content + eejs.require("ep_getselectionandpost/templates/fileMenu.ejs");
  return cb();
}

// add style element
exports.eejsBlock_styles = function ( hook_name, context, cb) {
  // console.log( hook_name, context );
  context.content = context.content + eejs.require("ep_getselectionandpost/templates/styles.ejs");
  return cb();
}
