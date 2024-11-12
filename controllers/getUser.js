import User from "../models/User.js";

async function getUserDetails(req, res) {
  //   function to get all users in the db collection
  const allUserContact = await User.find({});
  console.log(allUserContact);
  res.status(201).json({ message: "acceccesd successfully" });
}

export default getUserDetails;
