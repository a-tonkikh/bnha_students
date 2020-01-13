import React, {Component} from 'react';

class SearchList extends Component {
  render() {
    return (
      <li className="preiew__item" id={this.props.item.id} onClick={this.props.selectStudent}>
          <div className="preiew__image" id={this.props.item.id}>
            <img src={this.props.item.imageSchool} alt={this.props.item.name} id={this.props.item.id}/>
          </div>
          <p className="preiew__name" id={this.props.item.id}>{this.props.item.name}</p>
          <p className="preiew__class" id={this.props.item.id}>Class {this.props.item.class}</p>
      </li>
    )
  }
}

export default SearchList
