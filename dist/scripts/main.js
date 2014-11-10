(function () {

  App.Models.Song = Backbone.Model.extend({

    idAttribute: '_id',

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

(function () {

  App.Collections.Songs = Backbone.Collection.extend({
    model: App.Models.Song,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/setlistmz'
  });

}());

(function () {

  App.Views.AddSong = Backbone.View.extend({

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

      App.songs.add(c).save();
    }
  });
}());

(function () {

  App.Views.ListSong = Backbone.View.extend({

    tagName: 'ul',
    className: 'allSongs',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function () {
      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      $('#songList').html(this.$el);
    },
    render: function () {
      var self = this;

      this.$el.empty();

      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });

      return this;
    }
  });
}());

(function () {

  App.Views.SingleSong = Backbone.View.extend({

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

(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
    Backbone.history.start();
    },
    routes: {
      '' : 'home',
      'edit/:id' : 'editSong'

    },

    home: function () {
      new App.Views.AddSong();
      new App.Views.ListSong({ collection: App.songs });
    },

    editSong: function (id) {

      var c = App.songs.get(id);

      new App.Views.SingleSong({ song: c });
    }

  });

}());

(function () {

  App.songs = new App.Collections.Songs();

  App.songs.fetch().done( function () {

  App.router = new App.Routers.AppRouter();

 });


}());
