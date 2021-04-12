export const styles = theme => ({
    leftsidebar: {
        padding: 50,
        "@media(max-width: 960px)": {
            display: "none !important",
        }
    },
    rightcontent: {
        padding: 50,
        "@media(max-width: 960px)": {
            padding: 17,
        }
    },
    eannumber: {
        background: "#FAFAFA",
        padding: 24,
        textAlign: "center",
        color: "#273238",
        fontSize: 18,
        margin: "50px 50px 0px 50px",
        "& a": {
            fontWeight: 600,
            textDecoration: "underline",
            paddingLeft: 7,
            color: "#273238",
            display: "inline-flex"
        },
        "@media(max-width: 960px)": {
            background: "#273238",
            color: "white",
            margin: 0,
            fontSize: 12,
            padding: "18px 7px",
            "& a": {
                color: "white",
            }
        }
    },
    submitbutton: {
        padding: 18,
        borderRadius: "30px !important",
        display: "block",
    },
    dialog: {
        background: "#1118207a",
    }
})