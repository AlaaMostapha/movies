import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    // maxWidth: 100,
    // maxHeight: 100,
    // width: "19rem",
    width: "14rem",
    height: "26rem",
    transition: "transform 0.15s ease-in-out",
    // boxShadow: "0rem 2rem 5rem #80808052",
    backgroundColor: "transparent",
    boxShadow: "none",

    // "& .MuiButtonBase-root": {
    //   height: "100%",
    // },
  },
  cardImg: {
    objectFit: "fill",
    borderRadius: "15px",
    //  -webkit-box-shadow: 3px 3px 8px 1px rgba(0,0,0,0.46);
    boxShadow: "3px 3px 8px 1px rgba(0,0,0,0.46)",
  },
  cardContent: {
    backgroundColor: "transparent",
    textAlign: "center",
  },
  cardHovered: {
    boxShadow: "0rem 2rem 5rem #80808052",
    transform: "scale3d(1.05, 1.05, 1)",
    background: "#37474f",
    borderRadius: "15px",
    "& .MuiCard-root": {},
    "& .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiRating-readOnly": {
      color: "#fff!important",
    },
    "& .MuiCardMedia-img": {
      borderRadius: "0",
    },
  },
});
