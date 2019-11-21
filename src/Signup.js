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
                      <input className="form-control" placeholder="First Name" required/>
                    </div>
              </div>

                    <div className= "form-group row">
                        <label htmlFor= "lastname" className= "col-sm-2 col-form-label">Last Name</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Last Name" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "dob" className= "col-sm-2 col-form-label">Date of Birth</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "DOB" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "address" className= "col-sm-2 col-form-label">Address</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Address" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "ssn" className= "col-sm-2 col-form-label">SSN</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "SSN" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "username" className= "col-sm-2 col-form-label">Username</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Username" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "password" className= "col-sm-2 col-form-label">Password</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Password" type="password" required/>
                        </div>
                    </div>

                    <div className= "form-group row">
                        <label htmlFor= "password" className= "col-sm-2 col-form-label">Confirm Password</label>
                        <div className= "col-sm-10">
                            <input className= "form-control" placeholder= "Password" type="password" required/>
                        </div>
                    </div>
					 <div className = "col text-center">
						<button type="onSubmit" className="btn btn-secondary">Submit</button>
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

function address(){
  var address = (document.getElementById("address")).value;
  return address;
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

function postToDB(){
  axios.post('https://opposum-api.herokuapp.com/register',{
    params:{
      firstname: fName(),
      lastname: lName(),
      dateOfBirth: dateOfBirth(),
      address: address(),
      ssNum: socialSec(),
      username: user(),
      password: pass(),
    }
  })
  .then(response => {
    console.log(response);
  })
}

export default Signup;
