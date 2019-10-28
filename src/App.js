import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

function App() {
  const url = require('./components/lock.png');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return password.length > 8; //length validation was easy here
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const center = {
	  textAlign: "center"
  };
  const wrapper = {
	  display : "flex"
  };
  
  const left = {
	  flex: "right",
	  backgroundColor: "SteelBlue",
	  width: 1500 //Need to make this relative
  };
  const right = {
	  flex: "right",
	  backgroundColor: "SteelBlue"
  };

  return (
	<div style = {center} className = "Banner">		
		<div style ={wrapper} className = "FlexWrapper">
			<div style = {left} className = "Name">
				<h1> &emsp;&emsp;&emsp;&emsp; Security Center </h1>			
			</div>
			<div style = {right} className = "Products">
				<h2> PRODUCTS </h2>
			</div>
		</div>
		<div className = "Logo">
			<img src={url} style={{width: 150}} alt='Lock Logo' />
			<div className="Login">
				<form onSubmit={handleSubmit}> 
					<FormGroup controlId="email" bsSize="large">
					<FormLabel>Username</FormLabel>
					<FormControl
						autoFocus
						type="username"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
						<FormLabel>Password &nbsp;</FormLabel>
						<FormControl
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
						/>
					</FormGroup>
										
					<Button block bsSize="large" disabled={!validateForm()} type="submit"> Login </Button>					
				</form>
			</div>
			<div className = "Register"> &emsp;<button> Register </button> </div>
		</div>
	</div>
  );
}

export default App;
