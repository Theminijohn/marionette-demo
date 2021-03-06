ContactManager.module("Common.Views", function(Views, ContactManager, Backbone, Marionette, $, _){
  Views.Loading = Marionette.ItemView.extend({
    template: "#loading-view",

    initialize: function(options){
      var options = options || {};
      this.title = options.title || "Loading Data";
      this.message = options.message || "Please wait, data is loading.";
    },

    serializeData: function(){
      return {
        title: this.title,
        message: this.message
      }
    },

    onShow: function(){
      var opts = {
        lines: 13, // The number of lines to draw
        length: 4, // The length of each line
        width: 8, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: "#000", // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: "spinner", // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
      };
      $("#spinner").spin(opts);
    }
  });
});