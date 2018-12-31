import React, { Component } from "react";

class Child extends Component {
  state = {
    ChildContent: ""
  };

  static getDerivedStateFromProps(nextProps,prevState){ // It get called every time when the child component is getting called.
      console.log("nextProps...",nextProps)
      console.log("prevState...",prevState)
      if(!nextProps.value){
          return null;
      }
      else{
          return{
              ChildContent:nextProps.value
          }
      }
  }

//   componentWillReceiveProps(nextProps, prevState) {
//     console.log("nextProps...", nextProps);
//     if (!nextProps.value) {
//       return null;
//     }
//   }

  render() {
    console.log("Child Render...");
    return <div>Child</div>;
  }
}
// const Child = props => {
//   if (!props.value) {
//     return null;
//   }
//   console.log("Child Render...");
//   return <div>{props.value}</div>;
// };
export default Child;
