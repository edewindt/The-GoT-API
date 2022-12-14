require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is working. PORT " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.all("*", graphqlHTTP({ schema, graphiql: true }));
