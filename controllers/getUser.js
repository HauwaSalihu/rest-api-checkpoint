import User from "../models/User.js";

async function getUserDetails(req, res) {
  //   function to get all users in the db collection
  const allUserContact = await User.find({});
  if (allUserContact === null) {
    return res.status(400).json({ message: "No record in the database" });
  }
  console.log(allUserContact);
  res.status(201).json({ message: "accessed successfully" });
}

export default getUserDetails;
