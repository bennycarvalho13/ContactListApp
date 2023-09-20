import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let deleteID = 0;

	const listItems = store.contacts.map((c,index) => 
	<li key={index} className="list-group-item">
		<div className="row p-2">
			<div className="col-2 mt-2 ms-5">
			<img src="https://picsum.photos/100" className="rounded-circle" alt="image"/>
			</div>
			<div className="col-6 p-1">
				<p className="h4">{c.full_name}</p>
				<div className="text-secondary"><i className="fa-solid fa-location-dot me-3"></i>{c.address}</div>
				<div className="text-secondary"><i className="fa-solid fa-phone-flip me-3"></i>{c.phone}</div>
				<div className="text-secondary"><i className="fa-solid fa-envelope me-3"></i>{c.email}</div>
			</div>
			<div className="col-1 offset-md-2 px-1">
			<button type="button" className="btn" data-bs-toggle="modal" onClick={() => {deleteID = c.id}} data-bs-target="#exampleModal"><i className="fa-solid fa-trash-can fa-lg"></i></button>
				<Link to="/editcontact"><button className="btn" onClick={() => {store.editId = c.id; store.editName = c.full_name; store.editPhone = c.phone; store.editAddress = c.address; store.editEmail = c.email}} ><i className="fa-solid fa-pencil  fa-lg"></i></button>
				</Link>
			</div>
		</div>
	</li>);
	return(
	<div className="container-fluid">
				<div className="row m-3 justify-content-end">
			<div className="col-2">
				<Link to="/addcontact"><button className="btn btn-lg bg-success text-light">Add new Contact</button></Link>
			</div>
		</div>
		<ul className="list-group m-5">
			{listItems}
		</ul>
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        if you delete this thing the entire universe will go down!
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
        <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {actions.deleteContact(deleteID); deleteID = 0; store.editName = "Full Name"; store.editPhone = "Phone"; store.editAddress = "Address"; store.editEmail = "Email"}}>Yes baby!</button>
      </div>
    </div>
  </div>
</div>
	</div>
	);
};
