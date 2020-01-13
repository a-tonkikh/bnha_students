import React, {Component} from 'react';

class ToDoItem extends Component {
  render() {
    const doneStyle = {
      textDecoration: "line-through red",
      color: "#D3D3D3"
    }
    return (
      <li className="list__item">
        <label style={this.props.item.completed ? doneStyle : null}><input type="checkbox" id={this.props.item.id} checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)}/>{this.props.item.text}</label>
      </li>
    )
  }
}

export default ToDoItem
