import React from 'react';

function Signup(){

    return(
        <div class= "sigUupForm">
			<nav class= "navbar navbar-dark bg-dark">		
				<span class= "navbar-brand">Inject Me Corp</span>	      
			</nav>		
			<img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />	
                <form >
                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">First Name</label>
                        <div class= "col-sm-10">
                            <input class="form-control" placeholder="First Name"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">Last Name</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Last Name"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">Date of Birth</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "DOB"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">Address</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Address"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">SSN</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "SSN"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">Username</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Username"/>
                        </div>
                    </div>

                    <div class= "form-group row">
                        <label class= "col-sm-2 col-form-label">Password</label>
                        <div class= "col-sm-10">
                            <input class= "form-control" placeholder= "Password"/>
                        </div>
                    </div>
                </form>
            

        </div>
    );
}
export default Signup;