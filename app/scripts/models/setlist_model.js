(function () {

  App.Models.Song = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      song: '',
      band: '',
      tempo: '',
      key: '',
      length: ''

    },

    initialize: function () {
      var t = this.get('song');

    }

  });

}());
