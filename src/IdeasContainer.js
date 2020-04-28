import React, { Component } from 'react';
import axios from 'axios';

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/users')
    .then(response => {
      console.log(response)
      this.setState({users: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return(
            <div className="tile" key={user.id} >
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          )       
        })}
      </div>
    )
  }
}

export default IdeasContainer;










