import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
          <div>
            <Jumbotron fluid style={{backgroundColor: "#894B94"}}>
              <Container fluid>
                <div className="row">
                  <img style={{margin: 20, marginLeft: 200}} src="https://i.kym-cdn.com/photos/images/newsfeed/000/318/755/b17.png" alt=""/>
                  <h1 style={{
                    marginLeft: 80, 
                    marginTop: 200, 
                    color: "black", 
                    fontWeight: "bold",
                    fontFamily: "Pacifico",
                    fontStretch: "expanded",
                    fontSize: 150
                  }}className="display-1">Meme Candy</h1>
                  <h3 style={{
                    marginLeft: 80, 
                    marginTop: 200, 
                    color: "black", 
                    fontWeight: "bold",
                    fontFamily: "Pacifico",
                    fontStretch: "expanded",
                    fontSize: 50
                  }}>A stranger's just a friend you haven't met!</h3>
                </div>
              </Container>
            </Jumbotron>
          </div>
    )
}

export default Header


