import React, { Component } from 'react';

class Login extends Component {
  render(){
    return(
        <form action="" method="POST">
          <legend className="ml-30">Login</legend>
            <div className="ml-30">
              <div className="form-login">
                <label> ID </label>
                <br />
                <input type="text" className="htmlFm-controlm-control" id="id" placeholder="Input ID"/>
                <br />
                <label >Password</label>
                <input type="password" className="form-control" id="pass" placeholder="Input Password"/>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
      );
  }
}

export default Login;
