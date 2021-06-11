import React from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import $ from "jquery";

import "./_viewData.css";

class ViewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  render() {
    $(document).ready(function () {
      $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $(".results tbody").children("tr");
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

        $.extend($.expr[":"], {
          containsi: function (elem, i, match, array) {
            return (
              (elem.textContent || elem.innerText || "")
                .toLowerCase()
                .indexOf((match[3] || "").toLowerCase()) >= 0
            );
          },
        });

        $(".results tbody tr")
          .not(":containsi('" + searchSplit + "')")
          .each(function (e) {
            $(this).attr("visible", "false");
          });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function (
          e
        ) {
          $(this).attr("visible", "true");
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $(".counter").text(jobCount + " item");

        if (jobCount == "0") {
          $(".no-result").show();
        } else {
          $(".no-result").hide();
        }
      });
    });
    
    function export2csv() {
      let data = "";
      const tableData = [];
      const rows = document.querySelectorAll("table tr");
      for (const row of rows) {
        const rowData = [];
        for (const [index, column] of row.querySelectorAll("th, td").entries()) {
          // To retain the commas in the "Description" column, we can enclose those fields in quotation marks.
          if ((index + 1) % 3 === 0) {
            rowData.push('"' + column.innerText + '"');
          } else {
            rowData.push(column.innerText);
          }
        }
        tableData.push(rowData.join(","));
      }
      data += tableData.join("\n");
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([data], { type: "text/csv" }));
      a.setAttribute("download", "data.csv");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    return (
      <>
        <div className="viewdata_header">
          <h2 style={{ textAlign: "center" }}>List of Data</h2>

          <a href="/adddata" className="viewdata_header-btn">
            Add Data
          </a>
        </div>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            class="search"
            onChange={this.onFilter}
          />
        </div>
        <div>
          <Table className="table results" id="mytable">
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
              <>
                <Tr>
                  <Td>1</Td>
                  <Td>Python</Td>
                  <Td>17876</Td>
                  <Td>26/01/2021</Td>
                  <Td>Open</Td>

                  <Td>On</Td>

                  <Td>1</Td>

                  <Td></Td>

                  <Td>15 April</Td>

                  <Td>Rogers</Td>

                  <Td>40</Td>
                </Tr>

                <Tr>
                  <Td>2</Td>
                  <Td>React</Td>
                  <Td>1947</Td>
                  <Td>26/01/2021</Td>
                  <Td>Open</Td>

                  <Td>On</Td>

                  <Td>1</Td>

                  <Td>2</Td>

                  <Td>15 April</Td>

                  <Td>Rogers</Td>

                  <Td>20</Td>
                </Tr>

                <Tr>
                  <Td>3</Td>
                  <Td>React UI</Td>
                  <Td>9876</Td>
                  <Td>26/01/2021</Td>
                  <Td>Open</Td>

                  <Td>On</Td>

                  <Td>1</Td>

                  <Td>2</Td>

                  <Td>3 June</Td>

                  <Td>Canara Bank</Td>

                  <Td>60</Td>
                </Tr>

                <Tr>
                  <Td>4</Td>
                  <Td>Angular</Td>
                  <Td>9871</Td>
                  <Td>2/01/2021</Td>
                  <Td>Open</Td>

                  <Td>On</Td>

                  <Td>1</Td>

                  <Td>2</Td>

                  <Td>1 February</Td>

                  <Td>SBI</Td>

                  <Td>80</Td>
                </Tr>

                <Tr>
                  <Td>5</Td>
                  <Td>Full Stack</Td>
                  <Td>11</Td>
                  <Td>26/06/2021</Td>
                  <Td>Open</Td>

                  <Td>On</Td>

                  <Td>1</Td>

                  <Td>2</Td>

                  <Td>15 May</Td>

                  <Td>Tech Mahindra</Td>

                  <Td>20</Td>
                </Tr>
              </>
            </Tbody>
          </Table>
          <button className="export" onClick={export2csv}
           >Export</button>
        </div>
      </>
    );
  }
}

export default ViewData;
