import React from "react";
import PropTypes from "prop-types";

// class component
// smart component
// can have state
class Contact extends React.Component {
	state = {
		showContactInfo: false
	};
	// functions go above render
	// if an arrow function is used a functional attribute doesn't
	// have to be binded to the component
	onShowClick = () => {
		// state is immutable
		// have use this.setState
		this.setState({ showContactInfo: !this.state.showContactInfo });
	}
	render() {
		// class components use "this.props"
		const { name, email, number } = this.props;
		const { showContactInfo } = this.state;
		return (
			<div className="card card-body mb-3">
				<h4>{name}<i onClick={this.onShowClick} className="fas fa-sort-down" /></h4>
				{showContactInfo ? (<ul className="list-group">
					<li className="list-group-item">Email: {email}</li>
					<li className="list-group-item">Phone: {number}</li>
				</ul>) : null}
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
