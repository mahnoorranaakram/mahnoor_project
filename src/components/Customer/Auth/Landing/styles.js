import BG_IMG from "../../../../resources/images/Auth/bg.png";

export const styles = theme => ({
    authlandingwrapper: {
        backgroundImage: `url(${BG_IMG})`,
        backgroundColor: "#80E1B7",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "left",
        "@media(max-width: 960px)": {
            display: "none",
        }
    },
    welcometextwrapper: {
        padding: "13px 0px 0px 50px",
        textAlign: "left",
        color: "white",
        clear: "both",
        "& .top": {
            fontStyle: "normal",
            fontWeight: "200",
            fontSize: 50,
        },
        "& .bottom": {
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            "& .left": {
                maxWidth: 210,
            },
            "& .right": {
                fontSize: 58,
            }
        }
    },
    authimgwrapper: {
        width: "100%",
        marginTop: "6%",
        position: "relative",
        "& .truck": {
            maxWidth: 400,
            width: "100%",
        },
        "& .box": {
            maxWidth: 230,
            position: "absolute",
            bottom: 16,
            left: 288,
            width: "100%",
        }
    },
    authmenuwrapper: {
        float: "right",
        "& a": {
            color: "white",
            display: "block",
            padding: 13,
            textAlign: "center",
            "&:hover": {
                color: "#273238",
                background: "white",
            }
        }
    },
    mobilenavwrapper: {
        position: "absolute",
        top: 46,
        left: 41,
        "@media(min-width: 961px)": {
            display: "none !important",
        },
        "& .mobilelinks": {
            background: "white",
            boxShadow: "0px 0px 12px -3px #b3b3b3",
            borderRadius: 5,
            zIndex: 9999,
            display: "flex",
            "& a": {
                color: "black !important",
            }
        }
    }
})