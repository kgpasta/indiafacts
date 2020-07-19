import React, { useState } from "react";
import MenuBar from "./MenuBar/MenuBar";
import Drawer from "./Drawer/Drawer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  app: {},
}));

const App = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div>
      <MenuBar setMobileOpen={setMobileOpen} />
      <Drawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className={classes.app}>{props.children}</main>
    </div>
  );
};

export default App;
