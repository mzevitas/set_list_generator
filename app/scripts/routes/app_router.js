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
