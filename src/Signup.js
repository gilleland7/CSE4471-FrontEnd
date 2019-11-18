import React from 'react';
import axios from 'axios';

function Signup(){

    return(
      <div class= "sigUupForm">
			   <nav class= "navbar navbar-dark bg-dark">
				     <span class= "navbar-brand">Inject Me Corp</span>
			   </nav>
			   <img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />
         <form >
              <div class= "form-group row">
                  <label htmlFor= "firstname" class= "col-sm-2 col-form-label">First Name</label>
                    <div class= "col-sm-10">
                      <input class="form-control" placeholder="First Name"/>
                    </div>
              </div>

                    <div class= "form-group row">
                        <label htmlFor= "lastname" class= "col-sm-2 col-form-label">Last Name</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Last Name"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label htmlFor= "dob" class= "col-sm-2 col-form-label">Date of Birth</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "DOB"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label htmlFor= "address" class= "col-sm-2 col-form-label">Address</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Address"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label htmlFor= "ssn" class= "col-sm-2 col-form-label">SSN</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "SSN"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label htmlFor= "username" class= "col-sm-2 col-form-label">Username</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Username"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label htmlFor= "password" class= "col-sm-2 col-form-label">Password</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Password"/>
                        </div>
                    </div>
                </form>

            <div className = "col text-center">
              <button htmlFor = "sub" type="onSubmit" className="btn btn-secondary">Submit</button>
            </div>

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

function postToDB(){
  axios.post('https://opposum-api.herokuapp.com/register',{
    params:{
      firstname: fName(),
      lastname: lName(),
      dateOfBirth: dateOfBirth(),
      ssNum: socialSec(),
      username: user(),
      password: pass(),
    }
  })
  .then(response => {
    console.log(response);
  })
}

const btn = document.getElementById("sub");
//btn.addEventListener('submit', postToDB);


export default Signup;
