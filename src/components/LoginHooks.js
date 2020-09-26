import React, { useState } from 'react';

function LoginHooks () {
	const [username, setUsername] = useState('');
	const [pass, setPass] = useState('');

	const handleChangeUsername = e => {
		const {value} = e.target;
		setUsername(value);	
	}

	const handleChangePass = e => {
		const {value} = e.target;
		setPass(value);	
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log('AAA', username, pass);
	}

	return (
			<form  onSubmit={handleSubmit}>
          <legend className="ml-30">Login</legend>
            <div className="ml-30">
              <div className="form-login">
                <label> ID </label>
                <br />
                <input type="text" value={username} name="username" placeholder="Input ID" onChange={handleChangeUsername}/>
                <br />
                <label >Password</label>
                <input type="password" value={pass} name="pass" placeholder="Input Password" onChange={handleChangePass}/>
              </div>
              <br />
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
        </form>
		);
}

export default LoginHooks;