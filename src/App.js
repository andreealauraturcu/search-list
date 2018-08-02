import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import CatResults from "./CatResults";
import filterCat from "./filterCat";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredCat: filterCat("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredCat: filterCat(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <CatResults catData={this.state.filteredCat} />
      </div>
    );
  }
}
export default App;
