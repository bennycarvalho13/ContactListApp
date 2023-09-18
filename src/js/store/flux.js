const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],

			editId : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			updateContactList: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/benny")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						setStore({ contacts: data });
					})
					.catch(error => {
						console.log(error);
					});
			},
			addContact: (name, email, phone, address) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							"full_name": `${name}`,
							"email": `${email}`,
							"agenda_slug": "benny",
							"address":`${address}`,
							"phone":`${phone}`
						}),
				})
					.then(resp => {
						if(resp.ok){
							alert('Contact Added Succesfully');
						 }
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},
			editContact: (editName, editEmail,editPhone,editAddress,editId) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${editId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							"full_name": `${editName}`,
							"email": `${editEmail}`,
							"agenda_slug": "benny",
							"address":`${editAddress}`,
							"phone":`${editPhone}`
						}),
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						getActions().updateContactList();
					})
					.catch(error => {
						console.log(error);
					});
			},
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify([]),
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						getActions().updateContactList();
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
