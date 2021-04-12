export const styles = theme => ({
    photoeditwrapper: {
        position: "relative",
        "& .hideeditwrapper": {
            display: "none"
        },
        "& .editwrapper": {
            display: "none",
        },
        "&:hover": {
            "& .editwrapper": {
                position: "absolute",
                background: "#1118205e",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
                "& button": {
                    color: "white",
                    borderColor: "white",
                    fontSize: 17,
                    padding: "13px 32px",
                }
            }
        },
    },
    articlephotowrapper: {
        borderBottom: "1px solid #E0E3E4",
        paddingBottom: 32,
        marginBottom: 28,
    },
    titlewrapper: {
        padding: "22px 0px",
        "& .title": {
            color: "#F47B6B",
            fontSize: 17,
            textTransform: "uppercase",
        },
        "& .description": {
            float: "right",
            color: "#6F7A7F",
        },
        "@media(max-width: 960px)": {
            textAlign: "center",
            "& .title": {
                color: "#273238",
                fontWeight: 600,
                textTransform: "capitalize",
            },
            "& .description": {
                float: "none",
                display: "block",
            }
        }
    },
    bigboximg: {
        background: "#f1f1f1",
        borderRadius: 7,
        padding:22,
        margin: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 500,
        position: "relative",
        "& img": {
            width: "100%",
            maxWidth: 400,
        },
        "& .options": {
            display: "none"
        },
        "&:hover": {
            "& .options": {
                display: "block",
                position: "absolute",
                bottom: 13,
                right: 13,
                "& svg": {
                    background: "white",
                    color: "#273238",
                    marginRight: 7,
                    cursor: "pointer"
                }
            }
        }
    },
    smallboximg: {
        background: "#f1f1f1",
        borderRadius: 7,
        padding: 48,
        margin: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minHeight: "auto",
        "& img": {
            width: "100%",
            maxWidth: 200,
        },
        "& .options": {
            display: "none"
        },
        "&:hover": {
            "& .options": {
                display: "block",
                position: "absolute",
                bottom: 13,
                right: 13,
                "& svg": {
                    background: "white",
                    color: "#273238",
                    marginRight: 7,
                    cursor: "pointer"
                }
            }
        },
        "@media(max-width: 960px)": {
            padding: 22,
        }
    }
})