import React, {Component} from 'react';
import UAStudents from './UAStudents'
import SearchList from './SearchList'
import studentsData from './students.js'

class BNHAApp extends Component {
  constructor() {
        super()
        this.state = {
            students: [],
            allStudents: studentsData,
            search: '',
            openList: ''
        }
        this.randomStudent = this.randomStudent.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.selectStudent = this.selectStudent.bind(this)
        this.openList = this.openList.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    randomStudent(event) {
      event.preventDefault()
      const randNum = Math.floor(Math.random() * studentsData.length)
      this.setState({students: studentsData[randNum]})
    }

    componentDidMount() {
        const randNum = Math.floor(Math.random() * studentsData.length)
        this.setState({students: studentsData[randNum]})
    }

    handleClickOutside(event) {
      this.setState({openList: false});
    }

    updateSearch(event) {
      this.setState({search: event.target.value.substr(0, 20)});
    }

    selectStudent(event) {
      event.preventDefault();
      const studentId = event.target.id - 1;
      this.setState({students: studentsData[studentId]});
      this.setState({openList: false});
    }

    openList(event) {
      this.setState({openList: true});
    }

    render() {
      const filterStudents = this.state.allStudents.filter((student) => {return student.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;})
      const studentsList = filterStudents.map(item => <SearchList key={item.id} item={item} id={item.id} selectStudent={this.selectStudent}/>)
      const listClass = this.state.openList ? 'preiew preiew--active' : 'preiew'
      return (
            <div className="main-wrap">
              <form className="search-form">
                <input className="search-form__input" type="search" name="search" id="search" placeholder="Student name" value={this.state.search} autocomplete="off" onChange={this.updateSearch} onClick={this.openList}/>
              </form>
              <div className="search">
                <ul className={listClass}>
                  {studentsList}
                </ul>
              </div>
              <UAStudents key={this.state.students.id} item={this.state.students} handleClickOutside={this.handleClickOutside}/>
              <button className="random-btn" type="button" onClick={this.randomStudent}>Random</button>
            </div>
        )
    }
}

export default BNHAApp
