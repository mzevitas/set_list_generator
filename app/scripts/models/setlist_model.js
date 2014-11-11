(function () {

  App.Models.Song = Parse.Object.extend({

    className: 'SetList',

    idAttribute: 'objectId',

    defaults: {
      song: '',
      band: '',
      tempo: '',
      key: '',
      length: '',
      order: '',
      set: ''

    },

    initialize: function () {
      var t = this.get('song');

    }

  });

}());
