#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views

window.App =
  Models: {}
  Collections: {}
  Views: {}

  # Pools: ->
  #   @PoolsView = new App.Views.Pools(collection: new App.Collections.Pools)
  #   $(document.body).prepend(@PoolsView.render().el)