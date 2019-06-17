import React from "react";
// proptypes have to be imported
// "impt" + TAB is the snippet
import PropTypes from "prop-types";
// this is a functional component
// or dumb component
// they can't have state
const Header = props => {
	// dumb components don't use "this.props" only "props"
	const { branding } = props;
	return (
		<div>
			<h1>{branding}</h1>
		</div>
	);
};
// use default props to show something even if no attribute
// is passed
Header.defaultProps = {
	branding: "My App",
};
// sets header proptypes to a string and says it's required
Header.propTypes = {
	branding: PropTypes.string.isRequired,
};
export default Header;
