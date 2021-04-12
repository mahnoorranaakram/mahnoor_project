export const styles = theme => ({
    titlewrapper: {
        padding: "22px 0px",
        "& span": {
            color: "#F47B6B",
            fontSize: 17,
            textTransform: "uppercase",
        },
        "@media(max-width: 960px)": {
            textAlign: "center",
            "& span": {
                color: "#273238",
                fontWeight: 600,
                textTransform: "capitalize",
            }
        }
    },
    listingwrapper: {
        borderBottom: "1px solid #E0E3E4",
        paddingBottom: 32,
        marginBottom: 28,
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
        display: "block",
    },
    selectfields: {
        width: "100%",
        "@media(min-width: 960px)": {
            maxWidth: "96%",
        }
    },
    fieldmargin: {
        marginTop: 22,
    },
    deliverytitle: {
        background: "#FAFAFA",
        padding: 32,
        "& .title": {
            fontSize: 17,
            fontWeight: 600,
            borderBottom: "1px solid #E0E3E4",
            display: "block",
            padding: "13px 0px",
            marginBottom: 10,
        },
        "@media(max-width: 960px)": {
            padding: 0,
        }
    },
    shippingselectfields: {
        display: "inline-block",
        width: "90%",
        "@media(max-width: 960px)": {
            width: "87%",
        }
    },
})