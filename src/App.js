import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TableRow from "./TableRow";
import getData from "./Data/Repo";
import Product from "./Product";

const Data = getData();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      tableData: [
        {
          code: "123",
          rate: 23
        },
        {
          code: "234",
          rate: 12
        }
      ]
    };
  }

  rederTableRow = () => {
    return <TableRow />;
  };

  addRowData = () => {
    let tableData = this.state.tableData;
    tableData.push({
      code: "",
      rate: 0
    });
    this.setState(prevState => {
      return {
        tableData: tableData
      };
    });
  };

  updateSearch = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  addProductList = data => {
    return <Product id={data.id} name={data.name} />;
  };

  renderCollection = () => {
    debugger;
    if (this.state.searchText) {
      let data = Data.filter(x =>
        x.name.toLowerCase().includes(this.state.searchText)
      );
      return this.createCollection(data);
    } else {
      return this.createCollection(Data);
    }
  };

  createCollection = data => {
    return (
      <div className="table-overflow">{data.map(this.addProductList)}</div>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="table-overflow">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Product Name</th>
                <th>Rate</th>
                <th>Quantity</th>
                <th>V.Coll</th>
                <th>Disc%</th>
                <th>Disc</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{this.state.tableData.map(this.rederTableRow)}</tbody>
          </table>
        </div>
        <button onClick={this.addRowData}>Add</button>
        <div>
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.updateSearch}
          />
          {this.renderCollection()}
        </div>
      </div>
    );
  }
}

export default App;
