import React, { Component, ChangeEvent } from "react";
type propstype ={
  searchDigimons: (textv:string) => void
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

    this.props.searchDigimons(currentstate)
    this.setState({keyword:currentstate})
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
        </div>
      </form>
    </nav>
    )
  }
}


