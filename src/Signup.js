//SIGN UP PAGE
//Uses React Framework  https://reactjs.org/
import React from 'react';
import axios from 'axios';  //Uses Axios libray to handle HTTP requests, https://github.com/axios/axios
import {Link} from 'react-router-dom';

//The HTML
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
                            <input className= "form-control" type = "password" placeholder= "Password" id="password" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "password" className= "col-sm-2 col-form-label">Confirm Password</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" type = "password" placeholder= "Password" id="passwordConfirm" required/>
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

//Gets the first name from input
function fName(){
  var firstname = (document.getElementById("firstname")).value;
  return firstname;
}

//Gets the last name from input
function lName(){
  var lastname = (document.getElementById("lastname")).value;
  return lastname;
}

//Gets the DoB from input
function dateOfBirth(){
  var dob = (document.getElementById("dob")).value;
  return dob;
}

//Gets SSN from input
function socialSec(){
  var ssn = (document.getElementById("ssn")).value;
  return ssn;
}

//Gets username from input
function user(){
  var userN = (document.getElementById("username")).value;
  return userN;
}

//Gets password from input
function pass(){
  var passW = (document.getElementById("password")).value;
  return passW;
}

//Gets address from input
function add(){
	var add = (document.getElementById("address")).value;
	return add;
}

//Gets phone # from input
function phone(){
	var phone = (document.getElementById("phone")).value;
	return phone;
}

//Checks if password criteria is met
function check(){
	var check = true;

	var password1 = (document.getElementById("password")).value;
	var confirm1 = (document.getElementById("passwordConfirm")).value;

	//Password and confirmation password must be the same
	if (password1 !== confirm1){
		alert("Passwords do not match");
		check = false;
	}

	//Password must be 10 characters
	if (password1.length < 10){
		alert("Password must be at least to characters");
		check = false;
	}

	//Checks for special characters, returns true if it contains 1
	var pattern = new RegExp(/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/);
	 if (!pattern.test(password1)) {
		alert("Password missing a special character");
        check = false;
    }

	var i = 0;
	var capital = false;
	var lower = false;
	var num = false;

	//Checks each character
	while (i < password1.length){
		var character = password1.charAt(i);
		//Must have a lower case
		if (character === character.toLowerCase()){
			lower = true;
		}

		//Must have an upper case
		if (character === character.toUpperCase()){
			capital = true;
		}

		//Must have a digit
		if (character >= '0' && character <= '9'){
			num = true;
		}
		i++;
	}
		//If no lower case
		if (!lower){
			check = false;
			alert("Password missing lower case character");
		}

		//If no capital
		if (!capital){
			alert("Password missing a upper case character");
			check = false;
		}

		//If no number
		if (!num){
			alert("Password missing a number");
			check = false;
		}

	return check;
}

//Checks if user input was formatted correctly
function formCheck(){
	var check = true;
	var i = 0;
	var soc = false;
	var dob = false;
	var pho = false;

	//Check each character for DoB
	while (i < dateOfBirth().length){
		var character = dateOfBirth().charAt(i);

		//If character isn't a digit
		if (character <= '0' || character >= '9'){
			if (i !== 2 && i !== 5){
				dob = true;
			}
		}
		i++;
	}
	//If length is not exactly 8 (10/01/97)
	if (dateOfBirth().length < 8 || dateOfBirth().length > 8 || !dob){
		alert("DoB not formatted right");
		check = false;
	}

	i = 0; //reset

	//Check each SSN character
	while (i < socialSec().length){
		var character1 = socialSec().charAt(i);
		//If character is not a digit
		if (character1 <= '0' || character1 >= '9'){			
			soc = true;
		}
		i++;
	}

	//If ssn is not exactly 9 digits 123-45-6789 without dashes
	if (socialSec().length < 9 || socialSec().length > 9 || !soc){
		alert(socialSec().length);
		check = false;
	}

	i = 0; //reset

	//Check each phone number character
	while (i < phone().length){
		var character2 = phone().charAt(i);

		//If character is not a digit
		if (character2 <= '0' || character2 >= '9'){			
			pho = true;
		}
		i++;
	}

	//If phone number is not exactly 10 characters (123)-456-7890 without dashes
	if (phone().length < 10 || phone().length > 10 || !pho){
		alert("Phone number wrong");
		check = false;
	}
	return check;
}

//HTTP to register
function postToDB(e){

  if(check()&& formCheck()){ //Password features
	e.preventDefault();
	e.returnValue = true;
	axios.post('https://opposum-api.herokuapp.com/register',{},{
		params:{
		firstName: fName(),
		lastName: lName(),
		dateOfBirth: dateOfBirth(),
		ssNum: socialSec(),
		username: user(),
		address: add(),
		password: pass(),
		phoneNum: phone()
		}
	})
	.then(response => {
		alert("Success");
		console.log(response.data);
	}).catch((error)=> {
		alert("This account has already been made")

		//Reload page if login fails
		window.location.reload(false);
		console.log(error);
		});
	}
}

export default Signup;
