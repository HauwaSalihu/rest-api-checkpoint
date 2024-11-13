import express from "express";
//creating an instance of express router
//in other to use the router function to define your routes

const router = express.Router();
//importing add user from adduser.js in other to use the create a user function
import addUser from "../controllers/addUser.js";
//importing update user from updateuser.js in other to use the update user function
import updateUser from "../controllers/editUser.js";

import deleteUser from "../controllers/deleteUser.js";

import getUserDetails from "../controllers/getUser.js";

router.get("/user", getUserDetails);
router.post("/create", addUser);
//the update user route takes /:userId
//in other for the request to obtain a user id  from it sroute
router.put("/update-user/:userId", updateUser);

router.delete("/delete-user/:userId", deleteUser);
//exporting router allows all the set routes
//to be accessed in any file that the router is imported into
export default router;
