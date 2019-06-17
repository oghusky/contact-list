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
			<div>
				<h3>{name}</h3>
				<ul>
					<li>{email}</li>
					<li>{number}</li>
				</ul>
			</div>
		);
	}
}
// Contact component proptypes
Contact.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
};

export default Contact;
