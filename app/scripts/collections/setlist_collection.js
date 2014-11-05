(function () {

  App.Collections.SetLists = Backbone.Collection.extend({
    model: App.Models.SetList,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/setlistmz'
  });

}());
