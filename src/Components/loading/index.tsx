import React, { Component } from "react";
const styles = {
  transition: "all 1s ease-out",
  animation_iteration_count: "infinite"
};

type proptypes = {
    ismounted:boolean
}

export default class Loading extends Component<proptypes>{
  state = {
    radius: 0,
    opacity:100
  };

  animate = () => {
      if(this.props.ismounted){
        if (this.state.radius === 25) {
            this.setState({ radius: 0,opacity:100 });
          } else {
            let radius = this.state.radius +1;
            let opacity = this.state.opacity -4; 
            this.setState({ radius: radius,opacity:opacity });
          }
          setTimeout(this.animate,10)
      }

  };
  componentDidMount() {
    this.animate();
  }
  render() {
      if(this.props.ismounted){
        return (
            <div
              id="circle"
              style={{ display: "block", margin: "auto", width: "100%" }}
            >
              <svg width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r={this.state.radius}
                  fill="grey"
                  opacity={this.state.opacity*0.01}
                />
              </svg>
            </div>
          );
      }
      else return(
          (
              <React.Fragment>

              </React.Fragment>
          )
      )
    
  }
}

// export default function Loading() {
//   return (
// <div id="circle" >
//   <svg
//     width="100"
//     height="100"
//     style={{ display: "block", margin: "auto", width:"100%" }}
//   >
//     <circle cx="50" cy="50" r="25" fill="grey" />
//   </svg>
//   <style>
//       #cicle {`{`}
//           width:100%;
//           height:100%;
//           opacity:100%;
//           transition: all 1s ease-out;
//           animation-iteration-count: infinite;
//           animation:loading
//       {`}`}
//       @keyframes loading{`{`}
//           from {`{`}
//           width:0%;
//           height:0%;
//           opacity:100%;
//           {`}`}
//           to {`{`}
//           width:100%;
//           height:100%;
//           opacity:00%;
//           {`}`}
//       {`}`}

//   </style>
// </div>
//   );
// }
