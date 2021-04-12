import BG_IMG from "../../../../resources/images/Auth/so-white.png";

export const styles = theme => ({
    topwrapper: {
        padding: 50,
        minHeight: 300,
        "& .left": {
            float: "left",
            color: "#273238",
            "& span": {
                marginBottom: 8,
                display: "block",
            },
            "& h1": {
                fontSize: 50,
                fontWeight: 600,
                lineHeight: 1,
                margin: 0,
                maxWidth: 328,
            }
        },
        "& .right": {
            maxWidth: 214,
            float: "right"
        },
        "@media(max-width: 960px)": {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 28px",
            "& .left": {
                "& h1": {
                    maxWidth: "100% !important",
                    fontSize: "24px !important",
                }
            }
        }
    },
    navwrapper: {
        background: `url(${BG_IMG})`,
        background: "#273238",
        color: "white",
        position: "relative",
        display: "inline-block",
        width: "100%",
        "& .count": {
            display: "inline-block",
            borderRadius: "50%",
            border: "1px solid white",
            width: 26,
            height: 26,
            fontSize: 21,
            textAlign: "center",
            lineHeight: "1.2",
            margin: "0px 12px",
        },
        "& .freetrial": {
            background: "#F47B6B",
            fontSize: 11,
            lineHeight: "1.5",
            padding: 23,
            display: "inline-block",
            marginRight: 28,
            "& span": {
                position: "absolute",
                top: 0,
                left: 96,
                width: 0,
                height: 0,
                borderTop: "31px solid transparent",
                borderLeft: "31px solid #F47B6B ",
                borderBottom: "31px solid transparent"
            }
        }
    },
    selectionwrapper: {
        background: `url(${BG_IMG})`,
        padding: 50,
        margin: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        "@media(max-width: 960px)": {
            padding: 13,
        },
        "& .box": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 332,
            minWidth: 265,
            border: "1px solid transparent",
            textAlign: "center",
            padding: "32px 32px",
            margin: 12,
            borderRadius: 10,
            "& a": {
                color: "white",
                borderRadius: 38,
                padding: 8,
                width: 112,
                display: "block",
                visibility: "hidden",
                background: "#1875F0",
                marginTop: 13,
            },
            "&:hover": {
                boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.1)",
                "& a": {
                    visibility: "visible",
                }
            },
            "& img": {
                width: 132,
                height: "auto",
            },
            "& span": {
                display: "block",
                margin: "13px 0px",
                fontSize: 20
            },
            "@media(max-width: 960px)": {
                minWidth: 100,
                height: 278,
                "& span": {
                    fontSize: 14
                },
                "& img": {
                    width: 60,
                }
            },
        }
    }
})