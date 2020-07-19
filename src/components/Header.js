import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar } from "material-ui";

const styles = theme => ({
	root: {
		display: "flex"
	},
	paper: {
		marginRight: theme.spacing.unit * 2
	},
	button: {
		margin: theme.spacing.unit,
		backgroundColor: "#77FDC8",
		color: "rgba(60, 60, 60, 0.7)"
	},
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		textAlign: "center",
		fontWeight: "bold"
	},
	toolbar: {
		backgroundImage:
		'url("https://images.unsplash.com/photo-1485792606097-cdaae20ac665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80")'
	}
});

class Header extends React.Component {
	state = {
		open: false
	};

	handleToggle = () => {
		this.setState(state => ({ open: !state.open }));
	};

	handleClose = event => {
		if (this.anchorEl.contains(event.target)) {
			return;
		}

		this.setState({ open: false });
	};

	render() {
		return (
		<Fragment>
			<AppBar position="static" color="inherit">
				<div style={{ backgroundColor: "rgba(29, 30, 34, 1)" }}>
					<div>
						<center>
							<img
							style={{
								height: "auto",
								maxWidth: "90vw",
								maxHeight: "20vh",
								align: "center",
								position: "relative"
							}}
							src="https://i.imgur.com/bkyXJbn.png"
							alt = "Logo"
							/>
						</center>
					</div>
				</div>
			</AppBar>
		</Fragment>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
