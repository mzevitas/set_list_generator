(function () {

  App.Models.SetList = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      song: '',
      band: '',
      tempo: '',
      key: '',
      length: ''

    },

    initialize: function () {
      var t = this.get('name');
      //console.log(t + " has been added");
    }

  });

}());
