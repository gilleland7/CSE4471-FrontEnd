//Search Results page
//Uses React Framework  https://reactjs.org/ 
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; //Uses bootstrap for CSS https://getbootstrap.com/
import {Link} from 'react-router-dom';

const axios = require('axios')  //Uses Axios libray to handle HTTP requests, https://github.com/axios/axios

//Sets the data to the HTML
function set(temp, d){
	if (!temp){
		alert("here");
		document.getElementById('Results').innerHTML = d;				
	} else {
		var array = window.name.split("=");
		if (array !== ''){
		//The data
		var index = array[1].indexOf("?");
		var data = "Results: " + array[1].substring(0, index);
		var check = array[1].substring(index+1);
		//If the data was blank, it is false
		if (check) {
			if (data !== "" || data !== null) {
				document.getElementById('Results').innerHTML = data;
			} else {
				document.getElementById('Results').innerHTML = "Search Error";
			}
		} else {
			document.getElementById('Results').innerHTML = "Search Error";
		}
		} else {
			document.getElementById('Results').innerHTML = "Search Error";
		}
	}
}

//Gets the search criteria typed in
function getSearch(){
	var search = (document.getElementById("searchID")).value;
	return search;
}

//HTTP request for search
function searchQuery(){
	
	axios.get('https://opposum-api.herokuapp.com/search', {
			params:{
					//Just the username
					username: window.name.substring(0,window.name.indexOf('=')),
					searchField: getSearch()
			}
		})
	.then(function(response){
		//Add the response
		if (response.data.result !== ""){			
			set(false, response.data.result);
		}		
	})
	.catch(function(error) {
		console.log(error);
	});

}

//What displays, HTML
function Search() {
   const center = {
 	  textAlign: "center"
   }

   return (

	 <div style = {center} className = "Banner">
		<nav className= "navbar navbar-dark bg-dark">
		<Link to="/">
			<span className= "navbar-brand">Inject Me Corp</span>
		</Link>
			<form  className= "form-inline">
						<input className="form-control" type="search" placeholder="Search" aria-label="search" id="searchID" required/>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick = {searchQuery}>Search</button>
			</form>
		</nav>
		<img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />
		<div className = "Results" id = 'Results'>
			 <button onClick={set} type= "submit" className= "btn btn-secondary">Show Results</button>
		</div>
		<hr/>
	</div>

  );
}

export default Search;
