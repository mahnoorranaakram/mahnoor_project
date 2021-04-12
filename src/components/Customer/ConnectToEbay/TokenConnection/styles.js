export const styles = (theme) => ({
  infowrappertokenconnect: {
    padding: 58,
    "& .titletokenconnect": {
      fontWeight: "normal",
      fontSize: 30,
      marginBottom: 52,
      textAlign: "center",
      color: "black",
    },
  },
  mainwrappertokenconnect: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .desctokenconnect": {
      textAlign: "center",
      fontSize: 12,
      width: "60%",
    },
    "& .buttontokenconnect": {
      padding: 10,
      margin: "7%",
    },
  },
  infofootertokenconnect: {
    padding: 38,
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
      cursor: "pointer",
    },
  },
});
