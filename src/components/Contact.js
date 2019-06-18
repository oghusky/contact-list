import React from "react";
import PropTypes from "prop-types";

// class component
// smart component
// can have state
class Contact extends React.Component {
	render() {
		// class components use "this.props"
		const { name, email, number } = this.props;
		return (
			<div className="card card-body mb-3">
				<h3>{name}</h3>
				<ul className="list-group">
					<li className="list-group-item">Email: {email}</li>
					<li className="list-group-item">Phone: {number}</li>
				</ul>
			</div>
		);
	}
}
// Contact component proptypes
Contact.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};

export default Contact;
