var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var GreeterView = Backbone.View.extend({
    events: {
        'click button': 'clickHandler'
    },
    initialize: function() {
        this.clicks = 0;
        this.listenTo(this.model, 'change', this.render);
    },
    template: _.template('<h2>Hello <%- firstName %>! You clicked <%- clicks %> times! <button>Click me!</button></h2>'),
    render: function() {
        var context = _.extend(
            this.model.toJSON(),
            {clicks: this.clicks}
        );
        this.$el.html(this.template(context));
        return this;
    },
    clickHandler: function() {
        this.clicks++;
        this.render();
    }
});

module.exports = GreeterView;
