import React, { useState } from 'react'
import { render } from 'react-dom'
import App from './App'

const teamMembers = []

function TeamForm() {
	const [formValues, setFormValues] = useState({
		memberName: '',
		memberEmail: '',
	})
	const [members, setMembers] = useState(teamMembers)

	const change = (event) => {
		const { name, value } = event.target

		setFormValues({ ...formValues, [name]: value })
	}

	const submit = (event) => {
		event.preventDefault()
		const newmember = {
			memberName: formValues.memberName,
			memberEmail: formValues.memberEmail,
		}

		setMembers(members.concat(newmember))
		setFormValues({ memberName: '', memberEmail: '' })
	}

	return (
		<div className="container">
			<h1>Team List</h1>

			{members.map((member, idx) => (
				<div key={idx}>
					{member.memberName}'s email is {member.memberEmail}
				</div>
			))}
			<form onSubmit={submit}>
				<input
					type="text"
					name="memberName"
					value={formValues.memberName}
					onChange={change}
				/>

				<input
					type="text"
					name="memberEmail"
					value={formValues.memberEmail}
					onChange={change}
				/>
        

				<input type="submit" value="CREATE YOUR member" />
			</form>
		</div>
	)
}

render(
	<>
		<TeamForm />
	</>,
	document.querySelector('#root')
)
