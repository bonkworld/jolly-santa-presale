import React from "react";
import { Field, Form, Formik } from "formik";

import { Button, Paper, Typography, Box } from "@material-ui/core";
import _find from "lodash/find";
import distributionList from "./dist-list.json";

const Search = () => {
  const [searched, setSearched] = React.useState(false);
  const [url, setUrl] = React.useState("");

  const handleSubmit = (values, actions) => {
    setSearched(false);
    setUrl("");
    actions.setSubmitting(true);
    const thang = _find(distributionList, { handle: values.address });
    if (thang) {
      setUrl(thang.url);
    }
    actions.setSubmitting(false);
    setSearched(true);
  };
  return (
    <Paper style={{ backgroundColor: "green" }}>
      <Typography
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "12px",
        }}
        variant="h5"
      >
        Enter Solana Wallet Address
      </Typography>
      <Formik initialValues={{ address: "" }} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Box>
              <Field
                style={{ width: "95%", marginTop: "10px" }}
                name="address"
                placeholder="Solana Wallet Address"
              />
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "30%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                type="submit"
              >
                Search
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      {searched &&
        (url !== "" ? (
          <Box>
            <h3>
              Address found:&nbsp;&nbsp;
              <a
                href={url}
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                Click here to go to pre-sale.
              </a>
            </h3>
          </Box>
        ) : (
          <Box>
            <p>No result found.</p>
          </Box>
        ))}
    </Paper>
  );
};

export default Search;
