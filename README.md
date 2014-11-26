Copy Selection and Post
===

A plugin that enables us to copy the current selected text and post it to a configurable uri.


## Installing

- The recommended way is
npm install PATH/TO/THIS/FOLDER (from your etherpad-lite folder)

- But in actuality there are a few bugs regarding the admin manager currently so copying directly to ETHERPAD/node_modules is the way to go for now


## Open Questions

- Should this plugin also handle postPadContents (if so we should rename it) there are some UX considerations
- Should this plugin handle the posting of logged decisions on the EP sidebar, there are some UX / build / Architectural considerations here
- How does one handle a posted URL in a plugin (eg which hook)
  - Is it more of an eejs thing?


## Resources

- [Creating a Plugin](https://github.com/ether/etherpad-lite/wiki/Creating-a-plugin)
- [EtherPad Base Plugin](https://github.com/niklasfi/ep_base)
  - A basic example of an Etherpad plugin (we're following this pattern).
- [jQuery EtherPad plugin](https://github.com/ether/etherpad-lite-jquery-plugin)
  - Loads an etherpad into a page, makes contents copyable to a div.
- [Etherpad HTTP Api](http://etherpad.org/doc/v1.4.1/#index_http_api)
  -[What Can I Do with this API?](http://etherpad.org/doc/v1.4.1/#index_what_can_i_do_with_this_api)
