export const styles = theme => ({
    toplogo: {
        width: "100%",
        textAlign: "right",
        "& span": {
            fontWeight: 700,
            fontSize: 12,
        },
        "& img": {
            maxWidth: 100,
            display: "block",
            marginLeft: "auto",
        }
    },
    logintitle: {
        color: theme.palette.primary.main
    },
    loginWrapper: {
        padding: 50,
    },
    loginSubmitBtn: {
        width: "100%",
        padding: 13,
    },
    agbdesc: {
        color: "#C1C6C8",
        fontSize: 12,
        clear: "both",
        marginTop: 50,
        "& a": {
            padding: "0px 5px",
        }
    },
    forgetPassword: {
        float: "right",
    },
    loginContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "50px 50px 13px 50px",
        "& .first": {
            flex: 5,
        },
        "& .second": {
            flex: 6
        },
        "& third": {
            flex: 2
        }
    }
})