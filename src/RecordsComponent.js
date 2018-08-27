import React, { Component } from "react";

export default class RecordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: ["row 1", "row 2", "row 3"]
    };
  }
  render() {
    return (
      <div>
        <table>
          {this.state.rows.map(r => (
            <tr>
              <td>{r}</td>
            </tr>
          ))}
        </table>
        <button id="addBtn" onClick={this.addRow}>
          ADD
        </button>
      </div>
    );
  }

  addRow = () => {
    var rows = this.state.rows;
    rows.push("new row");
    this.setState({ rows: rows });
  };
}
