import React, { Component } from 'react';
import data from '../output.json'
import "./ResponseTable.css";


const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
  return <td key={props.data[key]}>{props.data[key]}</td>
  })
 }


class ResponseTable extends Component {
  state = {};

   
  _getKeys = () => {
    return Object.keys(data[0]);
  }

  _getHeader = () => {
    var keys = this._getKeys();
    return keys.map((key, index)=>{
        return <th className="table-header" key={key}>{key}</th>
    })
  }

  _getRowData = () => {
    var keys = this._getKeys();
    return data.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
  }


  render() {
    console.error(data)
    return(
      <div className="container table-wrapper w-75 mt-5">
        <table className="table table-bordered">
          <thead className="thead-light" style={{ position: "sticky"}}>
            <tr>{this._getHeader()}</tr>
          </thead>
          <tbody>
            {this._getRowData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ResponseTable