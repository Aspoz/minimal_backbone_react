/** @jsx React.DOM */

// var PoolView = React.createBackboneClass({
//     changeOptions: "change:name", // DEFAULT is "change",
//     render: function() {
//         return (
//           <div>
//               <h1>{this.getModel().get("name")}</h1>
//           </div>
//         );
//     }
// });

// var PoolsView = React.createBackboneClass({
//   render: function() {
//     var pools = this.props.pools.map(function(item){
//       return <li>{item.get("name")}</li>;
//     });
//     return <ul>{pools}</ul>;
//   }
// });


// React.renderComponent(
//   <PoolsView pools={App.Collection.Pools} />,
//   document.querySelector('body'));