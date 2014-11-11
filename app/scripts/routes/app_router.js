(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
    Parse.history.start();
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
