import React from "react";
import Header from "./components/layout/header";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends React.Component {
   
    state = {
      users: [],
      loading: false,

    };
  async componentDidMount(){
    this.setState({loading: true});

    const res = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`);
    const data = await res.json();
    this.setState({users: data, loading: false});
  }

  searchUsers = async (text) => {
    this.setState({loading: true});

    const res = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`);
    const data = await res.json();
    this.setState({users: data.items, loading: false});
  };
  render(){
    return (
      <div className="App">

        <Header  title="github finder"  author="Fahad Ahmed"/>

           <div className="container text-black py-10 mx-auto">
            <Search searchUsers={this.searchUsers} />
           <Users users={this.state.users} loading={this.state.loading}  />
           </div>
      </div>
    );
  };
};

export default App;
