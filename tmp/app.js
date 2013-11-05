define("app", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var App = Ember.Application.extend({
      LOG_ACTIVE_GENERATION: true,
      LOG_MODULE_RESOLVER: true,
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true
    });

    __exports__["default"] = App;
  });