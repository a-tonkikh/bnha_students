import React, {Component} from 'react';

class UAStudents extends Component {
  render() {
    const backgroundColor = {
      backgroundColor:  this.props.item.color
    }
    return (
        <div className="profile" style={backgroundColor} onClick={this.props.handleClickOutside}>
          <h1 className="profile__name">{this.props.item.name}</h1>
          <ul className="profile__props">
            <li className="profile__item">
              <p className="profile__item-title">Alias</p>
              <p className="profile__item-description profile__item-description--alias">{this.props.item.alias}</p>
            </li>
            <li className="profile__item">
              <p className="profile__item-title">Class</p>
              <p className="profile__item-description profile__item-description--class">{this.props.item.class}</p>
            </li>
            <li className="profile__item">
              <p className="profile__item-title">Quirk</p>
              <p className="profile__item-description profile__item-description--quirk">{this.props.item.quirk}</p>
            </li>
            <li className="profile__item">
              <p className="profile__item-title">Fighting Style</p>
              <p className="profile__item-description profile__item-description--style">{this.props.item.fightingStyle}</p>
            </li>
          </ul>
          <div className="profile__image">
            <img src={this.props.item.image} alt={this.props.item.name} />
          </div>
        </div>
      )
  }
}

export default UAStudents
