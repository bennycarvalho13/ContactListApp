import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { number } from "prop-types";

export const AddContact = () => {

	let name = "";
	let email = "";
	let phone = "";
	let address = "";

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
                <h1>Add a new Contact Here</h1>
  					<input type="text" onChange={(n) => name = n.target.value } id="name" className="form-control" placeholder="Full Name"/>
					<input type="text" onChange={(e) => email =e.target.value } id="email"	className="form-control" placeholder="Email"/>
					<input type="text" onChange={(p) => phone =p.target.value } id="phone" className="form-control" placeholder="Phone"/>
					<input type="text" onChange={(a) => address =a.target.value } id="address" className="form-control" placeholder="Address"/>
                <button className="btn bg-primary" onClick={() => {if (name.trim() === "" || email.trim() === ""|| phone.trim() === "" || address.trim() === "") {
			alert("Input cannot be empty");
		} else{actions.addContact(name, email, phone, address); document.getElementById('address').value = ''; document.getElementById('name').value = ''; document.getElementById('email').value = '';document.getElementById('phone').value = ''}}}>Click Here To add a new Contact</button>
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary"onClick={() => actions.updateContactList()} >Back home</button>
			</Link>
		</div>
	);
};
