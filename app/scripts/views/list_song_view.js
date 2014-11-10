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
