 var App = Ember.Application.create({
  ready: function(){
    console.log("Created App namespace");
    },
    ApplicationView: Ember.View.extend({
      templateName: 'application',
      classNames: ['application-view']
    }),
    ApplicationController: Ember.Controller.extend({
    }),
    Router: Ember.Router.extend({
      enableLogging: true,
      goToStats:  Ember.Route.transitionTo('root.stats'),
      root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/',
        })
      })
    })
});
App.initialize();

App.myController = Em.ObjectController.create({
  labelColor: 'rgb(255, 40, 0)'
});

App.ColorPicker = Em.View.extend({
  classNames: 'input-append color',
  attributeBindings: ['name', 'value'],
  value: '',
  template: Ember.Handlebars.compile('{{view Ember.TextField valueBinding="this.value"}}<span class="add-on"><i style="background-color: {{view.value}}}"></i></span>'),
  didInsertElement: function() {
        console.log(this.value);
        $('#backgroundColor').colorpicker({format: "rgb"});
  }
});