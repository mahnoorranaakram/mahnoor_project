export const styles = theme => ({
    titlewrapper: {
        padding: "22px 0px",
        clear: "both",
        "& span": {
            color: "#F47B6B",
            fontSize: 17,
            textTransform: "uppercase",
        },
        
        "@media(max-width: 960px)": {
            "& span": {
                color: "#273238",
                fontWeight: 600,
                textTransform: "capitalize",
                textAlign: "center",
                display: "block",
            },
        }
    },
    descriptioneditor: {
        width: "100%",
        position: "relative",
        "& .editbtn": {
            position: "absolute",
            bottom: 18,
            right: 18,
            padding: 18,
            borderRadius: "30px !important",
            minWidth: 128,
            fontWeight: 600,
            zIndex: 9,
        },
        "& .texteditor": {
            padding: 7,
            marginTop: 0,
            minHeight: 462,
            boxShadow: "none",
            background: "#FAFAFA",
            height: 447,
            overflow: "auto",
        }
    },
})