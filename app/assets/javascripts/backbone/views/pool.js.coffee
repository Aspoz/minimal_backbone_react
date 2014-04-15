class App.Views.Pool extends Backbone.View

  className: 'pool'

  template: HandlebarsTemplates['backbone/templates/pool']

  render: ->
    @$el.html(@template(@model.toJSON()))
    @