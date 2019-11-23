import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Signup(){

    return(
      <div className= "sigUupForm">
			   <nav className= "navbar navbar-dark bg-dark">
				     <span className= "navbar-brand">Inject Me Corp</span>
			   </nav>
			   <img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />
         <div className="container-fluid">
           <h4 className="text-left">Password Instructions</h4>
           <ul>
             <li className="text-left">Should have at least 1 special character</li>
             <li className="text-left">Should have at least 1 uppercase character</li>
             <li className="text-left">Should have at least 1 lowercase character</li>
             <li className="text-left">Should have at least 1 number</li>
           </ul>
         </div>
         <form>
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
                            <input className= "form-control" placeholder= "DOB (10/01/97)" id="dob" required/>
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
                            <input className= "form-control" placeholder= "SSN (no dashes)" id="ssn" required/>
                        </div>
                    </div>
					 <div className= "form-group row">
                        <label htmlFor= "phone" className= "col-sm-2 col-form-label">Phone Number</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Phone (no dashes)" id="phone" required/>
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
						<button type="onSubmit" onClick={postToDB} className="btn btn-secondary" >Submit</button>
						<Link to="/">
							<button type="onSubmit" className="btn btn-secondary" style ={{margin: 10 }} >Home</button>
						</Link>
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
  var ssn = (document.getElementById("ssn")).value;
  return ssn;
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

function phone(){
	var phone = (document.getElementById("phone")).value;
	return phone;
}

function check(){
	var check = true;

	var password1 = (document.getElementById("password")).value;
	var confirm1 = (document.getElementById("passwordConfirm")).value;

	if (password1 !== confirm1){
		alert("Passwords do not match");
		check = false;
	}

	if (password1.length < 10){
		alert("Password must be at least to characters");
		check = false;
	}

	var pattern = new RegExp(/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/);
	 if (!pattern.test(password1)) {
		alert("Password missing a special character");
        check = false;
    }

	var i = 0;
	var capital = false;
	var lower = false;
	var num = false;

	while (i < password1.length){
		var character = password1.charAt(i);
		if (character === character.toLowerCase()){
			lower = true;
		}
		if (character === character.toUpperCase()){
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
			alert("Password missing a upper case character");
			check = false;
		}

		if (!num){
			alert("Password missing a number");
			check = false;
		}

	return check;
}

function formCheck(){
	var check = true;
	var i = 0;
	var soc = false;
	var dob = false;
	var pho = false;
	
	while (i < dateOfBirth().length){
		var character = dateOfBirth().charAt(i);
	
		if (character >= '0' && character <= '9'){
			dob = true;
		}
		i++;
	}
	
	if (dateOfBirth().length < 8 || dateOfBirth().length > 8 || dob){
		check = false;
	}
	
	i = 0;
	while (i < socialSec().length){
		var character = socialSec().charAt(i);	
		if (character >= '0' && character <= '9'){
			soc = true;
		}
		i++;
	}
	
	if (socialSec().length < 9 || socialSec().length > 9 || soc){
		check = false;		
	}
	
	i = 0;
	while (i < phone().length){
		var character = phone().charAt(i);
	
		if (character >= '0' && character <= '9'){
			pho = true;
		}
		i++;
	}
if (phone().length < 10 || phone().length > 10 || pho){		
		check = false;			
	}
	return check;
}


function postToDB(){
  if(check() && formCheck()){ //Password feature
	axios.post('https://opposum-api.herokuapp.com/register',{},{
		params:{
		firstname: fName(),
		lastname: lName(),
		dateOfBirth: dateOfBirth(),
		ssNum: socialSec(),
		username: user(),
		address: add(),
		password1: pass(),
		phone: phone()
		}
	})
	.then(response => {
		alert(response.data.success);
		console.log(response);
	}).catch(function(error) {
		alert("This account has already been made")
		window.location.reload(false); //Reload page if login fails
		console.log(error);
		});
	}
}

export default Signup;
