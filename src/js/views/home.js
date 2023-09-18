import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const listItems = store.contacts.map((c,index) => 
	<li key={index} className="list-group-item">
		<div className="row p-2">
			<div className="col-1 m-4">
			<img src="https://picsum.photos/100" className="rounded-circle" alt="image"/>
			</div>
			<div className="col-6 p-1">
				<p>{c.full_name}</p>
				<p>{c.email}</p>
				<p>Phone: {c.phone}</p>
				<p>Address: {c.address}</p>
			</div>
			<div className="col-1 offset-md-3 px-1">
				<button className="btn" onClick={() => {actions.deleteContact(c.id)}} ><i class="fa-solid fa-trash-can fa-lg"></i></button>
				<Link to="/editcontact"><button className="btn" onClick={() => {store.editId = c.id}} ><i class="fa-solid fa-pencil  fa-lg"></i></button>
				</Link>
			</div>
		</div>
	</li>);
	return(
	<div className="container-fluid mt-5">
				<div className="row m-3 justify-content-end">
			<div className="col-2">
				<Link to="/addcontact"><button className="btn btn-lg bg-success text-light">Add new Contact</button></Link>
			</div>
		</div>
		<ul className="list-group">
			{listItems}
		</ul>
	</div>
	);
};
