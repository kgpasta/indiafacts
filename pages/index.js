import React, { useState } from "react";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import ErrorSnackbar from "../components/ErrorSnackbar/ErrorSnackbar";
import { withApollo } from "../lib/apollo";
import { getLayout } from "../layouts/MainLayout";

const IndexPage = () => {
  const [snack, setSnack] = useState({ open: false });
  const [category, useCategory] = useState("GEOGRAPHY");

  const handleChange = (val) => {
    useCategory(val);
  };

  return (
    <>
      <CategoryTabs value={category} handleChange={handleChange} />
      <ErrorSnackbar snack={snack} setSnack={setSnack} />
    </>
  );
};

const IndexApollo = withApollo({ ssr: true })(IndexPage);
IndexApollo.getLayout = getLayout;
export default IndexApollo;
