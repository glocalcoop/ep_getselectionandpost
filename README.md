Copy Selection and Post
===

A plugin that enables us to copy the current selected text and post it to a configurable uri.

## Resources

- [Creating a Plugin](https://github.com/ether/etherpad-lite/wiki/Creating-a-plugin)
- [EtherPad Base Plugin](https://github.com/niklasfi/ep_base)
  - A basic example of an Etherpad plugin (we're following this pattern).
- [jQuery EtherPad plugin](https://github.com/ether/etherpad-lite-jquery-plugin)
  - Loads an etherpad into a page, makes contents copyable to a div.
- [Etherpad HTTP Api](http://etherpad.org/doc/v1.4.1/#index_http_api)
  -[What Can I Do with this API?](http://etherpad.org/doc/v1.4.1/#index_what_can_i_do_with_this_api)


## Notes
- Client side hooks go into static/js
- Images and css files go in static/images and static/css respectively
- "If your plugin adds or modifies the front end HTML (e.g. adding buttons or changing their functions), you should put the necessary HTML code for such operations in templates/, in files of type ".ejs", since Etherpad-Lite uses EJS for HTML templating." — [Creating a Plugin](https://github.com/ether/etherpad-lite/wiki/Creating-a-plugin)

## Installing
  npm install PATH/TO/THIS/FOLDER (from your etherpad-lite folder)
