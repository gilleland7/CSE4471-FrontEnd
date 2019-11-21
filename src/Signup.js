import React from 'react';
import axios from 'axios';

function Signup(){

    return(
      <div className= "sigUupForm">
			   <nav className= "navbar navbar-dark bg-dark">
				     <span className= "navbar-brand">Inject Me Corp</span>
			   </nav>
			   <img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />
         <form onSubmit={postToDB} >
              <div className= "form-group row">
                  <label htmlFor= "firstname" className= "col-sm-2 col-form-label">First Name</label>
                    <div className= "col-sm-10">
                      <input className="form-control" placeholder="First Name" id="firstname" required/>
                    </div>
              </div>

                    <div className= "form-group row">
                        <label htmlFor= "lastname" className= "col-sm-2 col-form-label">Last Name</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Last Name" id="lastname" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "dob" className= "col-sm-2 col-form-label">Date of Birth</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "DOB" id="dob" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "address" className= "col-sm-2 col-form-label">Address</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Address" id="address" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "ssn" className= "col-sm-2 col-form-label">SSN</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "SSN" id="ssn" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "username" className= "col-sm-2 col-form-label">Username</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Username" id="username" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "password" className= "col-sm-2 col-form-label">Password</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Password" id="password" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "password" className= "col-sm-2 col-form-label">Confirm Password</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Password" id="passwordConfirm" required/>
                        </div>
                    </div>
					 <div className = "col text-center">
						<button htmlFor = "sub" type="onSubmit" className="btn btn-secondary">Submit</button>
					</div>
                </form>

        </div>
    );
}

function fName(){
  var firstname = (document.getElementById("firstname")).value;
  return firstname;
}

function lName(){
  var lastname = (document.getElementById("lastname")).value;
  return lastname;
}

function dateOfBirth(){
  var dob = (document.getElementById("dob")).value;
  return dob;
}

function socialSec(){
  var social = (document.getElementById("ssn")).value;
  return social;
}

function user(){
  var userN = (document.getElementById("username")).value;
  return userN;
}

function pass(){
  var passW = (document.getElementById("password")).value;
  return passW;
}

function add(){
	var add = (document.getElementById("address")).value;
	return add;
}

function check(){
	var check = true;
	
	var password = (document.getElementById("password")).value;
	var confirm = (document.getElementById("passwordConfirm")).value;
	
	if (password != confirm){
		check = false;
	}
	
	if (password.length < 10){
		check = false;
	}
	
	var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
	 if (!pattern.test(password)) {	
		alert("Password missing a special character");
        check = false;
    }
	
	var i = 0;
	var capital = false;
	var lower = false;
	var num = false;	
	
	while (i < password.length){
		var character = password.charAt(i);
		if (character == character.toLowerCase()){
			lower = true;			
		}
		if (character == character.toUpperCase()){
			capital = true;
		}
		
		if (character >= '0' && character <= '9'){
			num = true;
		}	
		i++;		
	}
	if (!lower){			
			check = false;
			alert("Password missing lower case character");
		}
		
		if (!capital){
			alert("Password missing a lower case character");
			check = false;
		}
		
		if (!num){
			alert("Password missing a number");
			check = false;
		}			
	
	return check;
}
	
	
function postToDB(){	
  //if(check()){ //Password feature
	axios.post('https://opposum-api.herokuapp.com/register',{
		params:{
		firstname: fName(),
		lastname: lName(),
		dateOfBirth: dateOfBirth(),
		ssNum: socialSec(),
		username: user(),
		address: add(),
		password: pass(),
		}
	})
	.then(response => {	  
		console.log(response);
		alert("EH");
	}).catch(function(error) {
		alert("This account has already been made")
		window.location.reload(false); //Reload page if login fails
		console.log(error);
		});
	//}
}

export default Signup;
