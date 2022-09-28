import { useState, useEffect } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
	const [contacts, setContacts] = useState([
		{
			fullname: "Ali",
			phone_number: "987654",
		},
		{
			fullname: "Veli",
			phone_number: "321012",
		},
		{
			fullname: "Ahmet",
			phone_number: "345678",
		},
	]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);

	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;