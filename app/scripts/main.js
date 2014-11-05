(function () {

  // Create Instance of Collection
  App.setlist = new App.Collections.Setlist();

  // Fetch any server-side coffees
  App.setlist.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


}());
