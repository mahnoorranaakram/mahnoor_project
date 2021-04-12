import { Block } from "@material-ui/icons";

export const styles = theme => ({
    sidebarwrapper: {
        boxShadow: "1px 0px 10px -2px #dcdbdb",
        borderRadius: 10,
    },
    accountinfowrapper: {
        display: "flex",
        flexDirection: "column",
        borderLeft: "50px solid #F8F8FA",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        "& .type": {
            color: "#F47B6B",
            marginTop: 28,
            padding: 11,
            display: Block,
            fontSize: 11,
            "& .title": {
                fontWeight: 600,
                paddingRight: 7,
            }
        },
        "& .email": {
            paddingLeft: 11,
            margin: 0,
            fontSize: 20,
            fontWeight: 600
        },
        "& .name": {
            paddingLeft: 11,
            margin: 0,
            fontSize: 13,
            color: "#6F7A7F",
            marginBottom: 22,
        }
    },
    navlinkswrapper: {
        display: "flex",
        flexDirection: "column",
        borderLeft: "50px solid #F8F8FA",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTop: "1px solid #E0E3E4",
        "& a": {
            display: "block",
            color: "#111820",
            fontSize: 17,
            padding: "22px 11px 0px 11px",
            marginBottom: 22,
            color: "#A2A2A2",
            "&:hover": {
                borderLeft: "4px solid #273238",
                paddingLeft: "7px",
                color: "#273238",
            }
        },
        "& .current": {
            borderLeft: "4px solid #273238",
            paddingLeft: "7px",
            color: "#273238",
        }
    }
})