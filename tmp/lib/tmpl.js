define("lib/tmpl.min", 
  [],
  function() {
    "use strict";
    Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


      data.buffer.push("<h2>Application</h2>\n\n");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      return buffer;
      
    });Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<h2>Index</h2>\n\n");
      
    });
  });