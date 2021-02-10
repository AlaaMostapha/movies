import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  searchBarStyle: {
    height: "50px",
    width: "50px",
    "& .MuiOutlinedInput-root": {
      // width: "200px",
      //       width: "50px",
      // height: "50px",
      borderRadius: "10rem",
      // height: "3rem",
      // width: "3rem",
      background: "#000",
      borderColor: "#fff",
      boxShadow: " 0 4px 8px gray",
      // "& fieldset": {
      //   // borderRadius: "50%",
      // },
      "&.Mui-focused fieldset": {
        borderWidth: "2px",
        // width: "800px",
      },
      "&.Mui-focused input:focus": {
        borderWidth: "2px",
        color: "#fff",
        // width: "1000px",
        "&::placeholder": {
          color: "#fff",
        },
      },
    },
  },
  focused: {
    width: "230px",
    position: "absolute",
    right: 0,
  },
}));

const CustomTextField = (props) => {
  const { type, name, placeholder, reference } = props;
  const classes = useStyles();
  return (
    <TextField
      className={classes.searchBarStyle}
      name={name}
      placeholder={placeholder}
      type={type}
      margin="normal"
      variant="outlined"
      inputRef={reference}
      InputProps={{
        classes: {
          focused: classes.focused,
        },
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ fill: "white" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextField;
