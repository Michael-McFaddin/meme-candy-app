import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  state = {
    navigate: true
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

  }
}


export default Logout;




// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';

// class Logout extends Component {
//   state = {
//     navigate: true
//   };

//   logout = () => {
//     localStorage.clear("token");
//     this.setState({ navigate: true });
//   };



//   render() {
//     const { navigate } = this.state;

//     if (navigate) {
//       return <Redirect to="/" push={true} />;
//       return <p onClick={this.logout}>Log Out</p>;
//     }


//   }
// }


// export default Logout;