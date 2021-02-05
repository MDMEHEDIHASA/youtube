import React from 'react';


class SearchList extends React.Component{
    state = {term:''};
    handleChange=(e)=>{
        this.setState({term:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.childToParent(this.state.term);
        //console.log(this.state.term);
    }
    render(){
        return(
        <div className="ui container" style={{ marginTop: `${10}px`,marginBottom:`${20}px` }}>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Youtube Search Here:</label>
            <input type="text" name="Search" placeholder="Search" value={this.state.term} onChange={this.handleChange}/>
          </div>
        </form>
      </div>
        );
    }
}

export default SearchList;

//className="ui container" style={{ marginTop: `${10}px`,marginBottom:`${10}px` }}