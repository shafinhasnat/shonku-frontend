import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  modalParentDiv: {
    padding: "1rem",
  },
  modalChildDiv: {},
  ModalTitleDiv: {
    padding: "1rem 0",
  },
  modalTitle: {
    fontWeight: "bolder",
    fontSize: "1.5rem",
  },
  button: {
    marginLeft: 10,
    fontSize: "0.9rem",
    backgroundColor: "green",
    color: "red",
    "&:hover": {
      backgroundColor: "green",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "gray",
    },
  },
  confirmButton: {
    float: "right",
    fontSize: "0.9rem",
    // padding: "0.5rem 10%",
    backgroundColor: "#27ae60",
    color: "#fff",
    "&:hover": {
      backgroundColor: "green",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "gray",
    },
  },
  closeButton: {
    float: "left",
    fontSize: "0.9rem",
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "0.5rem 10%",
    "&:hover": {
      backgroundColor: "pink",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "gray",
    },
  },
  buttonDiv: {
    padding: "1rem 0 ",
  },
});
export default useStyles;
