var Backbone = require('backbone');

var GreeterView = require('./greeter_view');

describe('My View', function() {
    it('should not regress', function() {
        var user = new Backbone.Model({
            firstName: 'Jordan',
            lastName: 'Eldredge'
        });
        var myView = new GreeterView({model: user}).render();
        expect(myView.$el.html()).toMatchSnapshot();
    });
    it('should welcome the user', function() {
        var user = new Backbone.Model({
            firstName: 'Jordan',
            lastName: 'Eldredge'
        });
        var myView = new GreeterView({model: user}).render();
        expect(myView.$el.html()).toContain('Hello Jordan!');
    });
    it('should rerender if user model changes', function() {
        var user = new Backbone.Model({
            firstName: 'Jordan',
            lastName: 'Eldredge'
        });
        var myView = new GreeterView({model: user}).render();
        user.set({firstName: 'Elizabeth'});
        expect(myView.$el.html()).toContain('Hello Elizabeth!');
    });
    it('should update counter when button is clicked', function() {
        var user = new Backbone.Model({
            firstName: 'Jordan',
            lastName: 'Eldredge'
        });
        var myView = new GreeterView({model: user}).render();
        expect(myView.$el.html()).toContain('You clicked 0 times');
        myView.$el.find('button').click();
        expect(myView.$el.html()).toContain('You clicked 1 times');
    });
});
