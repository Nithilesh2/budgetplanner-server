const axios = require("axios");

const users = {
  id: 3,
  username: "Kingsman",
  email: " kingsman@gmail.com",
};

axios
  .post("http://localhost:8800/users", users)
  .then((result) => {
    console.log("Added successfully", result.data);
  })
  .catch((err) => {
    console.error("Got an error", err);
  });

// axios
//   .get("http://localhost:8800/users", users)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log;
//     err;
//   });

// axios
//   .delete("http://localhost:8800/users/2")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .then((err) => {
//     console.log(err);
//   });
