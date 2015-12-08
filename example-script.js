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
