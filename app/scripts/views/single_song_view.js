(function () {

  App.Views.SingleSong = Backbone.View.extend({

    tagName: 'ul',
    className: 'coffeeSong',

    events: {
      'submit #updateSong' : 'updateSong',
      'click #delete' : 'deleteSong'
    },

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      $('#songForm').empty();

      // Get our Element On Our Page
      $('#songList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.song.toJSON()));

    },

    updateSong: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.song.set({
        song: $('#song_name').val(),
        band: $('#band').val(),
        tempo: $('#tempo').val(),
        key: $('#key').val(),
        length: $('#song_length').val()
      });

      // Save Instance
      this.options.song.save();

      // Go back to our home page
      App.router.navigate('', {trigger: true});

    },

    deleteSong: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.song.destroy();

      // Go home ET
      App.router.navigate('', {trigger: true});

    }

  });

}());
