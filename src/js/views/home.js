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
			<div className="col-1 m-4">
			<img src="https://picsum.photos/100" className="rounded-circle" alt="image"/>
			</div>
			<div className="col-6 ms-3 p-1">
				<p className="h4">{c.full_name}</p>
				<div className="text-secondary"><i className="fa-solid fa-location-dot me-3"></i>{c.address}</div>
				<div className="text-secondary"><i className="fa-solid fa-phone-flip me-3"></i>{c.phone}</div>
				<div className="text-secondary"><i className="fa-solid fa-envelope me-3"></i>{c.email}</div>
			</div>
			<div className="col-1 offset-lg-3 px-1">
			<button type="button" class="btn" data-bs-toggle="modal" onClick={deleteID = c.id} data-bs-target="#exampleModal"><i className="fa-solid fa-trash-can fa-lg"></i></button>
				<Link to="/editcontact"><button className="btn" onClick={() => {store.editId = c.id}} ><i className="fa-solid fa-pencil  fa-lg"></i></button>
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
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        if you delete this thing the entire universe will go down!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {actions.deleteContact(deleteID); deleteID = 0}}>Yes baby!</button>
      </div>
    </div>
  </div>
</div>
	</div>
	);
};
