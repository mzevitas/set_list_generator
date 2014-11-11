(function () {

  App.Views.SingleSong = Parse.View.extend({

    tagName: 'ul',


    events: {
      'submit #updateSong' : 'updateSong',
      'click #delete' : 'deleteSong'
    },

    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      $('#songForm').empty();
      $('#songList').html(this.$el);
    },

    render: function () {
      this.$el.empty();
          this.$el.html(this.template(this.options.song.toJSON()));
    },

    updateSong: function (e) {
      e.preventDefault();

      this.options.song.set({
        song: $('#song_name').val(),
        band: $('#band').val(),
        tempo: $('#tempo').val(),
        key: $('#key').val(),
        length: $('#song_length').val(),
        order: $('#order').val(),
        set: $('#set').val()
      });


      this.options.song.save();


      App.router.navigate('', {trigger: true});



  $('#set1').on('click').append(this.template);




    },

    deleteSong: function (e) {
      e.preventDefault();

      this.options.song.destroy();

      App.router.navigate('', {trigger: true});
    }
  });
}());
