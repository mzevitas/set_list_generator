(function () {

  App.Collections.Songs = Backbone.Collection.extend({
    model: App.Models.Song,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/setlistmz'
  });

}());
