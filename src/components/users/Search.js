import React, { Component } from 'react'

 class Search extends Component {
    state = {
        text: ''
    };

    onChange = (e) => {
        e.preventDefault();
        this.setState({ text: e.target.value});

    };

    getUsers = (e) => {
        e.preventDefault();
        if(this.state.text === ""){}
        else{
            this.props.searchUsers(this.state.text);
        };
    };
  render() {
    return (
      <div>
        <form onSubmit={this.getUsers} className="pt-5 pb-10  ">
          <input
           className="h-[50px] w-full px-2 mr-2 border-2 outline-0 mb-4" 
           type="search" 
           placeholder="Search" 
           aria-label="Search" 
           value={this.state.text} 
           onChange={this.onChange} >

           </input>
          <button className="w-full bg-blue-500 text-white py-2 px-5 rounded-md text-[20px] font-medium" type="submit">Search</button>
        </form>
      </div>
    );
  };
};

export default Search;

