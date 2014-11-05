(function () {

  App.Views.AddSong = Backbone.View.extend({

    el: '#songForm',

    events: {
      'submit #addSong' : 'addSong'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html($('#addTemp').html());
    },

    addSong: function (e) {
      e.preventDefault();

      var c = new App.Models.Song({
        song: $('#song_name').val(),
        band: $('#band').val(),
        tempo: $('#tempo').val(),
        key: $('#key').val(),
        length: $('#song_length').val()

      });

      App.songs.add(c).save();

    }

  });

}());
