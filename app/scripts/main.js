Parse.initialize("PoJBuUh4ttM4mkrNJV5QZLZDRE82w9bLGqp8NOPa", "R3qYRkRDwzl1OU6cvwj4uhaHQWCuXdQSIc2JriN8");

(function () {

  App.songs = new App.Collections.Songs();

  App.songs.fetch().done( function () {

  App.router = new App.Routers.AppRouter();

 });


}());
