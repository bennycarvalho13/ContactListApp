import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { number } from "prop-types";

export const EditContact = () => {

	let name = "";
	let email = "";
	let phone = "";
    let address = "";

	const { store, actions } = useContext(Context);
	
	return (
		<div className="container">
			<ul className="list-group m-0 p-3">
            <h1 className="text-center">Edit Contact</h1>
			<label className="ms-2 mt-2 h6" htmlFor="name">Full Name</label>
				<input type="text" onChange={(n) => name = n.target.value} id="name" className="form-control m-2" placeholder="Full Name" />
				<label className="ms-2 mt-2 h6" htmlFor="email">Email</label>
				<input type="text" onChange={(e) => email = e.target.value} id="email" className="form-control m-2" placeholder="Email" />
				<label className="ms-2 mt-2 h6" htmlFor="phone">Phone</label>
				<input type="text" onChange={(p) => phone = p.target.value} id="phone" className="form-control m-2" placeholder="Phone" />
				<label className="ms-2 mt-2 h6" htmlFor="address">Address</label>
				<input type="text" onChange={(a) => address = a.target.value} id="address" className="form-control m-2" placeholder="Address" />
				</ul>
			<button className="btn bg-primary text-light ms-2 w-100" onClick={() => 
				{
					if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || address.trim() === "")
					{
						alert("Input cannot be empty");
					} else {
						actions.editContact(name, email, phone, address, store.editId); document.getElementById('address').value = ''; document.getElementById('name').value = ''; document.getElementById('email').value = '';document.getElementById('phone').value = ''
					}
				}
			}>Save</button>
			<Link className="ms-2" to="/" onClick={() => actions.updateContactList()}>
				or get back to contacts
			</Link>
		</div>
	);
};