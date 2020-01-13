import React, {Component} from 'react';

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randonImg: "",
      allMemeImgs: []
    }

    this.handleChahge = this.handleChahge.bind(this)
    this.memeSubmit = this.memeSubmit.bind(this)
  }

  componentDidMount() {
       fetch("https://api.imgflip.com/get_memes")
           .then(response => response.json())
           .then(response => {
               const {memes} = response.data
               this.setState({allMemeImgs: memes})
           })
   }

   handleChahge(event) {
     const {name, value} = event.target
     this.setState({[name]: value})

   }

   memeSubmit(event) {
     event.preventDefault()
     const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
     const randImg = this.state.allMemeImgs[randNum].url
     this.setState({randonImg: randImg})
   }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.memeSubmit}>
            <input name="topText" type="text" value={this.state.topText} placeholder="Top text" onChange={this.handleChahge}/>
            <input name="bottomText" type="text" value={this.state.bottomText} placeholder="Bottom text" onChange={this.handleChahge}/>
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randonImg} alt="Your meme"/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}


export default MemeGenerator
