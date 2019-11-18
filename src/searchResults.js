import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';

const axios = require('axios')

function set(){
	var array = window.name.split("=");
	var data = "Results: " + array[0];
	if (array[0]) {
		document.getElementById('Results').innerHTML = data;
	} else {
		document.getElementById('Results').innerHTML = "Search Error";
	}
}

function getSearch(){
	var search = (document.getElementById("searchID")).value;
	return search;
}

function searchQuery(){
	axios.get('https://opposum-api.herokuapp.com/search', {
			params:{
					username: window.name,
					searchField: getSearch()
			}
		})
	.then(function(response){
		window.name = window.name+"results="+response.data[1];
		window.location.reload(false);
	})
	.catch(function(error) {
		console.log(error);
	});

}
function Search() {
   const center = {
 	  textAlign: "center"
   }

   return (

	 <div style = {center} className = "Banner">
		<nav className= "navbar navbar-dark bg-dark">
			<span className= "navbar-brand">Inject Me Corp</span>
			<form onSubmit = {searchQuery} className= "form-inline">
						<input className="form-control" type="search" placeholder="Search" aria-label="search" id="searchID" required/>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
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
