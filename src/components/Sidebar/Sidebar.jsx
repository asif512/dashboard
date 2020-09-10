import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { storeContext } from "../../context/Context";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import "./Sidebar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const initialState = useContext(storeContext);
  const { state } = initialState;

  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
    // setState({ ...state, toggleMenu: false });
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className="sidebar"
      style={{ width: !state.toggleMenu ? "200px" : "60px" }}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        <Link to="/" className="item">
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(e) => handleListItemClick(e, 1)}
          >
            <ListItemIcon>
              <SendIcon style={{ color: "#ffffff" }} />
            </ListItemIcon>

            {!state.toggleMenu ? <ListItemText primary="Home" /> : ""}
          </ListItem>
        </Link>
        <Link to="/charts" className="item">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(e) => handleListItemClick(e, 2)}
          >
            <ListItemIcon>
              <DraftsIcon style={{ color: "#ffffff" }} />
            </ListItemIcon>
            {!state.toggleMenu ? <ListItemText primary="Charts" /> : ""}
          </ListItem>
        </Link>
        <Link to="/buttons" className="item">
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(e) => handleListItemClick(e, 3)}
          >
            <ListItemIcon>
              <DraftsIcon style={{ color: "#ffffff" }} />
            </ListItemIcon>
            {!state.toggleMenu ? <ListItemText primary="Buttons" /> : ""}
          </ListItem>
        </Link>
        {/* <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          {!state.toggleMenu ? <ListItemText primary="Components" /> : ""}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/buttons" className="item">
              <ListItem
                button
                className={classes.nested}
                selected={selectedIndex === 3}
                onClick={(e) => handleListItemClick(e, 3)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                {!state.toggleMenu ? <ListItemText primary="Buttons" /> : ""}
              </ListItem>
            </Link>
          </List>
        </Collapse> */}
      </List>
    </div>
  );
};
