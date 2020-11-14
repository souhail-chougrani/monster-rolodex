import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchInput from "./components/search-input/Search-input.component";
class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };
  async componentDidMount() {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonResp = await req.json();
    this.setState({ monsters: jsonResp });
  }
  handleSearch = (event) => {
    const searchField = event.target.value;
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const monstersFiltred = searchField
      ? monsters.filter((m) => m.name.includes(searchField))
      : monsters;
    console.log(monstersFiltred);
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchInput
          onSearch={this.handleSearch}
          placeholder="search monster"
          searchedValue={this.state.searchField}
        />
        <CardList monsters={monstersFiltred}></CardList>
      </div>
    );
  }
}

export default App;
