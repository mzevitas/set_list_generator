(function () {

  // Create Instance of Collection
  App.songs = new App.Collections.Songs();

  // Fetch any server-side coffees
  App.songs.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


}());
