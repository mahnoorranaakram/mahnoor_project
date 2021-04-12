import { Block } from "@material-ui/icons";

export const styles = (theme) => ({
  listviewsidebarwrapper: {
    boxShadow: "1px 0px 10px -2px #dcdbdb",
    borderRadius: 10,
    backgroundColor: "#F8F8FA",
    display: "flex",
    flexDirection: "row",
  },
  listviewmain: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    "& .leftsidelist": {
      backgroundColor: "#F8F8FA",
      paddingLeft: 28,
    },
  },
  listinfowrapper: {
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    "& .type": {
      color: "#C1C6C8",
      marginTop: 28,
      padding: 11,
      display: Block,
      fontSize: 11,
      "& .lefttextone": {
        fontWeight: 600,
        paddingRight: 7,
      },
    },
    "& .lefttexttwo": {
      paddingLeft: 11,
      margin: 0,
      fontSize: 20,
      fontWeight: 600,
    },
    "& .lefttextthird": {
      paddingLeft: 11,
      margin: 0,
      fontSize: 13,
      color: "#6F7A7F",
      marginBottom: 22,
    },
  },
  navlinkslistwrapper: {
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTop: "1px solid #E0E3E4",
    "& a": {
      display: "block",
      color: "#111820",
      fontSize: 17,
      padding: "8px 7px 0px 11px",
      marginBottom: 22,
      color: "#A2A2A2",
      "&:hover": {
        borderLeft: "4px solid #273238",
        paddingLeft: "7px",
        color: "#273238",
      },
    },
    "& .current": {
      borderLeft: "4px solid #273238",
      paddingLeft: "7px",
      color: "#273238",
    },
    "& .leftsidecolorfirst": {
      color: "#1875F0",
    },
    "& .leftsidecolorsecond": {
      color: "#FA1E01",
    },
  },

  navlinkslistsidebarwrapper: {
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    "& .leftsidecolorfirst": {
      color: "#1875F0",
    },
    "& .leftsidecolorsecond": {
      color: "#FA1E01",
    },
  },
  listleftsideinfowrapper: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
    marginTop: 26,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    "& .cloudicon":{
      fontSize: 25, color: "#C1C6C8"
    }
  },
});
