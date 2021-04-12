export const styles = (theme) => ({
  infowrapper: {
    padding: 58,
    "& h1": {
      fontWeight: 400,
      textAlign: "center",
      marginBottom: 52,
    },
  },
  mainwrapper: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 197px)",
    "& .first": {
      flex: 10,
    },
  },
  contentbox: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: 32,
    "& img": {
      width: 24,
      marginRight: 17,
    },
  },
  infofooter: {
    padding: 38,
    borderTop: "1px solid #E0E3E4",
    textAlign: "center",
    flex: 1,
    "& img": {
      width: 58,
      display: "block",
      margin: "auto",
    },
    "& span": {
      fontSize: 12,
      fontWeight: 700,
    },
  },
  backicon: {
    backicon: "pointer",
    marginBottom: -8,
  },
  whattokenback: {
    paddingTop: 8,
  },
});
