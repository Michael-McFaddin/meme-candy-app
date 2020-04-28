import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImgUrl: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
   
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        // console.log(memes[3]);
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  //writting method this way doesn't require this.handleSubmit.bind(this)
  handleSubmit = (event) => {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImgUrl: randMemeImg})
  }

  render() {
    return (
      <div className="container">
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input style={{margin: 40}}
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input  style={{margin: 40}}
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
            <button>Generate</button>
        </form>
        <Container style={{margin: 40, textAlign: "center"}}>
          <div className="meme">
            <img style={{height: 700 , width: "auto" }} src={this.state.randomImgUrl} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </Container>
      </div>
      )
  }
}

export default MemeGenerator