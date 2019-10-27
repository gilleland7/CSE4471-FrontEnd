import React from 'react';

function App() {
  const url = require('./components/lock.png');
   const SignUpPage = require('./src/SignUp.js');
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
			<div className = "Login"> <button> LOGIN HERE </button> </div>
			<div className = "Register"> <button> Register </button> </div>
		</div>
	</div>
  );
}

export default App;
