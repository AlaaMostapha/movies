import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  searchBarStyle: {
    height: "50px",
    width: "50px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10rem",
      background: "#000",
      borderColor: "#fff",
      boxShadow: " 0 4px 8px gray",
      "&.Mui-focused fieldset": {
        borderWidth: "2px",
      },
      "&.Mui-focused input:focus": {
        borderWidth: "2px",
        color: "#fff",
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
