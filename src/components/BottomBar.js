import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import PropTypes from "prop-types";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: "#E10050"
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: "#3c3c3c"
        }
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        //contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        // tonalOffset: 0.2
    }
});

const styles = {
    Paper: {
        backgroundColor: "transparent",
        height: "105vh",
        display: "flex",
        margin: "auto",
        alignItems: "center"
    },
    Paper2: {
        textAlign: "center",
        fontWeight: "bold",
        fontColor: "#fafafa",
        display: "flex",
        width: "100vw",
        boxShadow: "0"
        //backgroundColor: "#1d1e22"
    },
    fab: {
        margin: theme.spacing.unit,
        top: -35,
        boxShadow: "0"
    },
    fabButton: {
        position: "absolute",
        // zIndex: 1,
        top: -30,
        left: 10,
        right: 0,
        margin: "0 auto"
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

function print_arrow_key(keyCodeNumber) {
    let LEFT, UP, RIGHT, DOWN;

    LEFT = 37;
    UP = 38;
    RIGHT = 39;
    DOWN = 40;

    switch (keyCodeNumber) {
        case LEFT:
            ChangePageBack();
            break;
        case UP:
            break;
        case RIGHT:
            ChangePageForward();
            break;
        case DOWN:
            break;
        default:
            break;
    }
}

function checkKeycode(event) {
    let keyDownEvent = event || window.event,
        keycode = keyDownEvent.which ? keyDownEvent.which : keyDownEvent.keyCode;

    print_arrow_key(keycode);
    
    return false;
}

document.onkeydown = checkKeycode;

let thispage = 1;
let totalpages = 2;
// fullwidth: https://i.stack.imgur.com/Qafwh.jpg
// img1: https://i.stack.imgur.com/WMVv1.jpg
// img2: https://i.stack.imgur.com/ddMMK.jpg

function ChangePageBack() {
    if (thispage > 1) {
        thispage = thispage - 1;

        let img = document.getElementById("page-image");
        img.src = "https://i.imgur.com/SpDoXiu.jpg";

        let pgn = document.getElementById("page-number");
        pgn.textContent = thispage;
    }
}

function ChangePageForward() {
    if (thispage < totalpages) {
        thispage = thispage + 1;

        let img = document.getElementById("page-image");
        img.src = "https://i.imgur.com/RjQa4Ka.jpg";

        let pgn = document.getElementById("page-number");
        pgn.textContent = thispage;
    }
}

function BottomBar(props) {
    const { classes } = props;
    console.log("=======================classes==================");
    console.log(classes);
    return (
        <Fragment>
            <div style={styles.Paper2}>
                <div
                style={{
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    align: "center",
                    boxShadow: "0"
                }}
                >
                    <MuiThemeProvider theme={theme}>
                        <Fab
                        onClick={ChangePageBack}
                        aria-label="FirstPage"
                        className={classes.fab}
                        color="primary"
                        box-shadow="0"
                        >
                            <div
                                style={{
                                color: "secondary",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "50px",
                                boxShadow: "0"
                                }}
                            >
                                <FirstPage />
                            </div>
                        </Fab>
                        <Fab
                        onClick={ChangePageBack}
                        aria-label="KeyboardArrowLeft"
                        className={classes.fab}
                        color="primary"
                        >
                            <div
                                style={{
                                color: "secondary",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "50px"
                                }}
                            >
                                <KeyboardArrowLeft />
                            </div>
                        </Fab>
                        <Fab
                        aria-label="KeyboardArrowLeft"
                        className={classes.fab}
                        color="primary"
                        >
                            <div
                                style={{
                                color: "secondary",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "50px"
                                }}
                            >
                                <font id="page-number" size="5">
                                {thispage}
                                </font>
                            </div>
                        </Fab>
                        <Fab
                        onClick={ChangePageForward}
                        aria-label="KeyboardArrowRight"
                        className={classes.fab}
                        color="primary"
                        >
                            <div
                                style={{
                                color: "secondary",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                align: "center"
                                }}
                            >
                                <KeyboardArrowRight />
                            </div>
                        </Fab>
                        <Fab
                        onClick={ChangePageForward}
                        aria-label="LastPage"
                        className={classes.fab}
                        color="primary"
                        >
                            <div
                                style={{
                                color: "secondary",
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "50px"
                                }}
                            >
                                <LastPage />
                            </div>
                        </Fab>
                    </MuiThemeProvider>
                </div>
            </div>
        </Fragment>
    );
}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomBar);
