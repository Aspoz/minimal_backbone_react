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

// var poolsView = React.createBackboneClass({
//   render: function() {
//     return <p>Hallo</p>;
//   }
// });

// React.renderComponent(
//   <poolsView />,
//   document.getElementById('container')
// );

// React.renderComponent(
//   React.DOM.h1(null, "Hello, world!"),
//   document.getElementById('container')
// );

// React.renderComponent(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );