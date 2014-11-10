(function () {

  App.songs = new App.Collections.Songs();

  App.songs.fetch().done( function () {

  App.router = new App.Routers.AppRouter();

 });


}());
