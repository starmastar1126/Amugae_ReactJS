import 'aframe'
import React, { Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "material-ui/styles"
import PropTypes from "prop-types"

import BottomBar from "./BottomBar"
import VrPage from "./VrPage"

const theme = createMuiTheme({
    palette: {
        primary: {
        main: "#77FDC8"
        },
        secondary: {
        main: "#3c3c3c"
        },
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2
    }
});

const styles = {
    Paper: {
        backgroundColor: "transparent",
        height: "105vh",
        display: "flex",
        alignItems: "center"
    },
    Paper2: {
        textAlign: "center",
        fontWeight: "bold",
        fontColor: "#fafafa",
        margin: "auto",
        display: "flex",
        alignItems: "center"
    },
    fab: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    },
    image: {
        fontWeight: "bold",
        backgroundColor: "#fafafa",
        width: "100%",
        margin: "auto",
        display: "flex",
        alignItems: "center"
    }
};

function Pair() {

    return (
        <Fragment>
        <script src="https://d3js.org/d3.v4.min.js" />
        <script src="https://aframe.io/releases/0.9.1/aframe.min.js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <div
            id="rectangle"
            style={{
            height: "25px",
            backgroundColor: "#77FDC8",
            marginBottom: "25px"
            }}
        />
        <div id="Pageimage" 
            style={{ 
                width: "100%",
                maxWidth: "850px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "50px",
                display: "block"
            }}
        >
 
            <img
                onClick={BottomBar.ChangePageBack}
                id="page-image"
                src="https://i.imgur.com/SpDoXiu.jpg"
                style={{ 
                width: "100%",
                maxWidth: "850px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "50px",
                display: "block"
                }}
                alt="PageImage"
            />
        </div>
        </Fragment>
    );
}

Pair.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pair);
