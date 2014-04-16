/** @jsx React.DOM */

var poolsCollection = new App.Collections.Pools();

var poolsView = React.createBackboneClass({
  render: function() {
    var pools = this.props.pools.map(function(item) {
      return <li>{item.get("name")}</li>;
    });
    return <ul>{pools}</ul>;
  }
});


React.renderComponent(
  <poolsView pools={poolsCollection} />,
  document.getElementById('container')
);
