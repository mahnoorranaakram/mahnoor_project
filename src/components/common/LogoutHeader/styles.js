export const styles = theme => ({
    headerWrapper: {
        background: theme.palette.primary.dark,
        padding: "13px 32px",
        "& img": {
            maxWidth: 100,
        }
    },
    headerlinks: {
        textDecoration: "none",
        fontWeight: 700,
        color: "white",
        minWidth: 80,
        display: "inline-block",
        fontSize: 13,
        paddingTop: 15,
        cursor: "pointer",
    },
    navbar: {
        float: "right",
    }
});