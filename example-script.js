/*First Example*/

//Create a variable where you extend the view
var AppView = Backbone.View.extend({
  //tell the view where your element should be rendered
    el: '#container',
  //this creates a template for how our output will be shown
  template: _.template("<p>Hello my name is <%= who %></p>"),
  //create an initialization function telling the server to render your inputs
  initialize: function(){
        this.render();
    },
  //create the render function telling where the content will be put
  render:function(){
        this.$el.html(this.template({who: 'Person!'}));
    }
});
//initialize the view by creating a new view
var appView = new AppView();

/*Second Example*/
//Create a shared name for everything to reference
var app ={}
//create a model with defaults of a generic first and last name
app.yourName = Backbone.Model.extend({
  defaults: {
    first: 'John',
    Last: 'Smith'
  }
})

//Create a new view this time telling the view to render in the other
//given div and format what is shown to be exactly the same as above
//Hint to get the first and last names of the model use this.model
var AppView2 = Backbone.View.extend({
  el:'#container2',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html('Hello my name is ' + this.model.get('first')+ ' ' + this.model.get('last'))
  },
})
//Create a new model for yourself with your first and last name
var me = new app.yourName({first: "Jacob", last: "Baquian"})
//Create a new view with the model passed into it
var appView2 = new AppView2({model: me})