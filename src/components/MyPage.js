import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import axios from 'axios';

class MyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memes: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/memes')
    .then(response => {
      console.log(response)
      this.setState({memes: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <Container style={{margin: 40, textAlign: "center"}}>
          <div className="container meme">
            {this.state.memes.map((meme) => {
              return(
                <div style={{ margin: 40}} className="tile meme" key={meme.id} >
                  <h2 className="top">{meme.top_text}</h2>
                  <img style={{height: 700 , width: 800}} src={meme.img_url} alt=""/>
                  <h2 className="bottom">{meme.bottom_text}</h2>
                </div>
              )       
            })}
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default MyPage;
