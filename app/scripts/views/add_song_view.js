(function () {

  App.Views.AddSong = Parse.View.extend({

    events: {
      'submit #addSong' : 'addSong'
    },
    initialize: function () {
      this.render();

       $('#songForm').html(this.$el);
    },
    render: function () {
      this.$el.html($('#addList').html());
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

        c.save(null, {
      success: function () {
        App.song.add(c);
        App.router.navigate('', { trigger: true });
      }
    }
  });
}());