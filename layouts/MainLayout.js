import React from "react";
import { makeStyles } from "@material-ui/core";
import MenuBar from "../components/MenuBar/MenuBar";

const useStyles = makeStyles(() => ({
  app: {},
}));

const MainLayout = (props) => {
  const classes = useStyles();
  return (
    <div>
      <MenuBar />
      <main className={classes.app}>{props.children}</main>
    </div>
  );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
