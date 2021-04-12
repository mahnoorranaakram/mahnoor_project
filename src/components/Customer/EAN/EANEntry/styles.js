import BG_IMG from "../../../../resources/images/Auth/so-white.png"

export const styles = theme => ({
    EANContainer:{
        background:`url(${BG_IMG})`,
        minHeight: "calc(100vh - 216px)",

    },
    containerwithoutbg: {
        padding:'8%',
        minHeight: "calc(100vh - 216px)",
    },
    contentwrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    eanHeading:{
        fontWeight: 600,
        fontSize: '20px',
        marginBottom:'3%',
        textAlign: "center",
        clear: "both"
    },
    submitbtn:{
        display: "flex",
        fontSize: 15,
        padding: 15,
        borderRadius: "48px !important",
        minWidth: 238,
        margin: "auto",
        marginTop: 52,    
    },
    eanEntryBox:{
        backgroundColor: 'white',
        borderRadius:'5%',
        padding: 52,
        width: "100%",
        "@media(max-width: 960px)": {
            marginTop: 52,
            padding: 22
        }
    },
    textfield: {
        "& div": {
            border: "1px solid #1875F0",
            borderRadius: "10px !important",
            paddingRight: 64,
        }
    },
    closebtn: {
        float: "right",
        paddingBottom: "40%",
        "& svg": {
            cursor: "pointer",
        }
    },
    fieldwithicon: {
        position: "relative",
        "& .icon": {
            position: "absolute",
            top: 6,
            right: 13,
            color: "#1875F0",
            textAlign: "center",
            cursor: "pointer",
            borderLeft: "1px solid #E0E0E0",
            paddingLeft: 13,
            height: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& span": {
                display: "block",
                fontSize: 11,
            },
            "& svg": {
                fontSize: 17,
            }
        }
    }
})