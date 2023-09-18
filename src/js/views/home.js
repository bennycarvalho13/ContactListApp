import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const listItems = store.contacts.map((c,index) => <li key={index} className="list-group-item"><p>{c.full_name}</p><p>Email: {c.email}</p><button className="btn bg-danger" onClick={() => {actions.deleteContact(c.id)}} > Delete Contact</button>
	<Link to="/editcontact">
	<button className="btn bg-warning" onClick={() => {store.editId = c.id}} >Edit Contact</button>
	</Link>
	<p>Id: {c.id}</p><p>Phone: {c.phone}</p><p>Address: {c.address}</p></li>);
	return(
	<div className="container mt-5">
		<ul className="list-group">
			{listItems}
			</ul>
		<Link to={"/addcontact"}>
		<span>Add new Contact</span>
		</Link>
	</div>
	);
};
