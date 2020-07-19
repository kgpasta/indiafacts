import React from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {},
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  image: {
    height: 30,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    objectFit: "contain",
    cursor: "pointer",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar} color={"transparent"}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.row}>
          <Link href="/">
            <img
              alt="India Facts"
              src="/indiafacts.png"
              className={classes.image}
            />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
