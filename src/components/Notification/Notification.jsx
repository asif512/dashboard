import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { storeContext } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    marginRight: "5px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const Notification = () => {
  const initialState = useContext(storeContext);
  const { state } = initialState;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={state.notification} color="primary">
        <MailIcon />
      </Badge>
    </div>
  );
};
