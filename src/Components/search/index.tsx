import React, { Component, ChangeEvent } from "react";
type propstype ={
  searchDigimons: (textv:string) => void
  searchbox: (x:void) => void
  keyword:string
}
type statestype = {
  keyword:string
}



export default class Search extends Component <propstype,statestype>{

  state={
    keyword:""
  }

  search = (event:ChangeEvent<HTMLInputElement>) =>{
    let currentstate= event.target.value
    this.setState({keyword:currentstate})
    this.props.searchDigimons(this.state.keyword)
  }
  

  render() {
    return (
      <nav className="panel">
      <form>
        <p className="panel-heading">Search A Digimon</p>
        <div className="panel-block">
          <p className="control has-icon">
            <input
              className="input is-small"
              type="text"
              value={this.state.keyword}
              placeholder="Search"
              onChange={this.search}
            />
            <span className="icon is-small">
              <i className="fa fa-search"></i>
            </span>
          </p>
          {/* <button className="button is-small is-primary">
            <span>Search</span>
          </button> */}
        </div>
      </form>
    </nav>
    )
  }
}


// export default function Search(props:propstype) {

//   // this.searchbox = (event:KeyboardEvent) => {
//   //   props.searchbox((event.target as HTMLInputElement).value)
//   // }

//   return (
//     <nav className="panel">
//     <form>
//       <p className="panel-heading">Search A Digimon</p>
//       <div className="panel-block">
//         <p className="control has-icon">
//           <input
//             className="input is-small"
//             type="text"
//             value={props.keyword}
//             placeholder="Search"
//             onChange={}
//           />
//           <span className="icon is-small">
//             <i className="fa fa-search"></i>
//           </span>
//         </p>
//         {/* <button className="button is-small is-primary">
//           <span>Search</span>
//         </button> */}
//       </div>
//     </form>
//   </nav>
//   )
// }

