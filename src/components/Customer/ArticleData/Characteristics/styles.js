export const styles = theme => ({
    characteristicswrapper: {
        borderBottom: "1px solid #E0E3E4",
        marginBottom: 28,
        paddingBottom: 32
    },
    titlewrapper: {
        padding: "22px 0px",
        clear: "both",
        "& .title": {
            color: "#F47B6B",
            fontSize: 17,
            textTransform: "uppercase",
        },
        "& .subtitle": {
            color: "#273238",
            display: "block",
            marginTop: 18,
            fontWeight: 600,
            fontSize: 17,
        },
        "@media(max-width: 960px)": {
            "& .title": {
                color: "#273238",
                fontWeight: 600,
                textTransform: "capitalize",
                textAlign: "center",
                display: "block",
            },
            "& .subtitle": {
            }
        }
    },
    breadcrumbwrapper: {
        minHeight: 32,
        borderBottom: "1px solid #1875F0",
        marginBottom: 22,
        "& .left": {
            float: "left",
            "& .title": {
                fontSize: 16,
                paddingRight: 7,
                fontWeight: 500,
            },
            "& .links": {
                display: "inline-flex",
                fontSize: 16,
                fontWeight: 500,
                    "&:last-child": {
                        "& svg": {
                        display: "none",
                    }
                }
            }
        },
        "& .editbtn": {
            float: "right",
            border: "none",
        },
        "@media(max-width: 960px)": {
            "& .left": {
                "& .title": {
                    fontSize: "12px !important",
                },
                "& .links": {
                    fontSize: "12px !important",
                    "& svg": {
                        fontSize: 12,
                    }
                }
            }
        }
    },
    textfields: {
        width: "100%",
        "& div": {
            border: "1px solid #A2A2A2",
            borderRadius: "8px !important",
        },
        "@media(min-width: 960px)": {
            maxWidth: "96%",
        }
    },
    textfieldslabel: {
        color: "#273238",
        fontWeight: 600,
        marginBottom: 7,
        display: "block"
    },
    selectfields: {
        width: "100%",
        "@media(min-width: 960px)": {
            maxWidth: "96%",
        }
    },
    fieldmargin: {
        marginTop: 22,
    }
})