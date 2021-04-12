export const styles = theme => ({
    footerwrapper: {
        padding: 20,
        textAlign: "center",
        boxShadow: "1px 0px 10px -1px #dcdbdb",
        position: "relative",
        "& button": {
            color: "#A2A2A2",
            fontSize: 13,
            margin: "0px 11px",
        },
        "@media(max-width: 960px)": {
            padding: "20px 7px",
            "& button": {
                margin: "0px 0px",
            }
        }
    },
    footerlinks: {
        padding: 13,
        textAlign: "center",
        "& a": {
            color: "#A2A2A2",
            fontSize: 13,
            padding: "7px",
        }
    },
    footerlogowrrapper: {
        position: "absolute",
        top: 38,
        right: 20,
        "@media(max-width: 960px)": {
            position: "unset"
        }
    },
    footerlogo: {
        width: "100%",
        textAlign: "right",
        "& span": {
            fontWeight: 400,
            fontSize: 12,
        },
        "& img": {
            maxWidth: 100,
            display: "block",
            marginLeft: "auto",
        }
    },
});