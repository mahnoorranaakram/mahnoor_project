export const styles = theme => ({
    googlebtn: {
        border: "1px solid #EB4335",
        color: "#EB4335",
        borderRadius: 8,
        width: 161,
        fontWeight: 600,
        marginRight: 13,
    },
    facebookbtn: {
        border: "1px solid #4267B2",
        color: "#4267B2",
        borderRadius: 8,
        width: 161,
        fontWeight: 600,
    },
    socialbtnwrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    sociallogintitle: {
        color: "#C1C6C8",
        display: "block",
        textAlign: "center",
        width: "100%",
        marginBottom: 15,
        "&::before": {
            display: "inline-block",
            content: "''",
            borderTop: "1px solid #C1C6C8",
            width: "15%",
            margin: "3px 1rem",
        },
        "&::after": {
            display: "inline-block",
            content: "''",
            borderTop: "1px solid #C1C6C8",
            width: "15%",
            margin: "3px 1rem",
        }
    },
    authfooterwrapper: {
        marginTop: 32,
        padding: 13,
        textAlign: "center",
        "& a": {
            color: "#C1C6C8",
            fontSize: 10,
            padding: "7px",
        }
    }
})