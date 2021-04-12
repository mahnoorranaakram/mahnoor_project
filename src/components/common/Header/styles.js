export const styles = theme => ({
    headerwrapper: {
        padding: "24px 38px",
        boxShadow: "1px 0px 10px -1px #dcdbdb",
    },
    headerlogo: {
        maxWidth: 150
    },
    headerlinkswrapper: {
        float: "right",
        lineHeight: "3",
        "& a": {
            display: "inline-block",
            marginLeft: 32,
            color: "black",
            fontSize: 17,
        },
        "& .upgradebtn": {
            color: "#F47B6B",
            background: "#FFFFFF",
            boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.15)",
            borderRadius: 38,
            padding: "0px 25px",
        },
        "& .links": {
            display: "inline-block",
            float: "left",
        },
        "@media(max-width: 960px)": {
            "& .links": {
                display: "none !important"
            }
        }
    },
    sidebarbtn: {
        position: "absolute",
        top: 28,
        right: 32,
        "@media(min-width: 961px)": {
            display: "none !important"
        }
    }
});