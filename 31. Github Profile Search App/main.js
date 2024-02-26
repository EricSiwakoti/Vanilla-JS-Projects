import * as v from "./modules/variables.js";
import { getUser, errorMessage } from "./modules/functions.js";

v.form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   let user = v.search.value.replace(/\s+/g, ""); -- Alternative method for split and join
  let user = v.search.value.split(" ").join("");

  if (user === "") {
    errorMessage("Input cannot be blank");
  } else {
    getUser(user);
    v.search.value = "";
  }
});
