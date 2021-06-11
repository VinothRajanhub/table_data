import React from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import "./_addData.css";

class AddData extends React.Component {
  state = {
    rows: [{}],
  };
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleAddRow = () => {
    const item = {
      role: "",
      crm: "",
      reqdate: "",
      status: "",
      toggle: "",
      position: "",
      fulfill: "",
      resourcedate: "",
      customer: "",
      rate: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };


  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  nextPath(path) {
    this.props.history.push(path);
  }


  render() {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>Data Table</h2>
        <div>
          <Table>
            <Thead>
              <Tr>
                <Th> # </Th>
                <Th> Role/Requirement </Th>
                <Th> CRM </Th>
                <Th>Req. Date</Th>
                <Th>Status</Th>
                <Th>On/Off</Th>
                <Th>Total Position</Th>
                <Th>Fulfilled Position</Th>
                <Th>Resource Start Date</Th>
                <Th>Customer</Th>
                <Th>Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {this.state.rows.map((item, idx) => (
                <>
                  <Tr id="addr0" key={idx}>
                    <Td>{idx}</Td>
                    <Td>
                      <input
                        type="text"
                        name="role"
                        value={this.state.rows[idx].role}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>
                    <Td>
                      <input
                        type="number"
                        name="crm"
                        value={this.state.rows[idx].crm}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>
                    <Td>
                      <input
                        type="date"
                        name="reqdate"
                        value={this.state.rows[idx].reqdate}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>
                    <Td>
                      <input
                        type="text"
                        name="status"
                        value={this.state.rows[idx].status}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                    <Td>
                      <input
                        type="text"
                        name="toggle"
                        value={this.state.rows[idx].toggle}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                    <Td>
                      <input
                        type="number"
                        name="position"
                        value={this.state.rows[idx].position}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                    <Td>
                      <input
                        type="number"
                        name="fulfill"
                        value={this.state.rows[idx].fulfill}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                    <Td>
                      <input
                        type="date"
                        name="resourcedate"
                        value={this.state.rows[idx].resourcedate}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                    <Td>
                      <input
                        type="text"
                        name="customer"
                        value={this.state.rows[idx].customer}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                    <Td>
                      <input
                        type="number"
                        name="rate"
                        value={this.state.rows[idx].rate}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </Td>

                  
                      <button
                        className="deleterow"
                        onClick={this.handleRemoveSpecificRow(idx)}
                      >
                        Remove
                      </button>
                 
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
          <button onClick={this.handleAddRow} className="addrow">
            Add Row
          </button>

          <button className="save" onClick={() => this.nextPath('/viewdata')}>Save</button>
        </div>
      </>
    );
  }
}

export default AddData;
