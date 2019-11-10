import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Search() {
	
   const url = require('./components/lock.png');
  
   const center = {
 	  textAlign: "center"
   }   
   
   return (
	 <div style = {center} className = "Banner">		 
		<nav class= "navbar navbar-dark bg-dark">
			<span class= "navbar-brand">Inject Me Corp</span>

			<form class= "form-inline">
				<input class="form-control" type="search" placeholder="Search" aria-label="search"></input>				
					<button class="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>				
			</form>
		</nav>
		<img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />	
		<div className = "Results">
			Results: (INSERT RESULT QUERY HERE) 
			<hr/>
		</div>
	</div>
  );
}

export default Search;
