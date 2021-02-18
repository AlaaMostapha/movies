import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    minHeight: "26rem",
    transition: "transform 0.15s ease-in-out",
    backgroundColor: "transparent",
    boxShadow: "none",
    width: "fit-content",
  },
  cardImg: {
    objectFit: "fill",
    borderRadius: "15px",
    height: "21rem",
    width: "14rem",
    boxShadow: "0rem 2rem 5rem #80808073",
  },
  cardContent: {
    backgroundColor: "transparent",
    textAlign: "center",
  },
  cardHovered: {
    boxShadow: "0rem 2rem 5rem #80808052",
    transform: "scale3d(1.05, 1.05, 1)",

    borderRadius: "15px",
    "& .MuiButtonBase-root": {
      background: "#37474f",
    },
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
