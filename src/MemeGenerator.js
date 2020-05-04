import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

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

  saveMeme(event) {
    const { memeName, topText, bottomText, randomImgUrl, userId } = this.state;
    axios
      .post(
        'http://localhost:3001/api/v1/users',
        {
          meme: {
            meme_name: memeName,
            top_text: topText,
            bottom_text: bottomText,
            img_url: randomImgUrl,
            user_id: userId
          }
        }
        // { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .then(this.props.history.push("/log-in"))
      .catch(error => {
        console.log("signup error", error);
        alert(JSON.stringify(error.response.data.errors));
      });
    event.preventDefault();
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

        <button>Save Meme</button>

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