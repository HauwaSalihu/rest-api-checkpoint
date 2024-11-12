import User from "../models/User.js";

async function deleteUser(req, res) {
  const { userId } = req.params;

  //check if email was provided
  if (!userId) {
    return res.status(400).json({ message: "please provide the user ID" });
  }
  //check if user account exist
  const userAccount = await User.findOne({ _id: userId });

  if (userAccount === null) {
    return res.status(400).json({ message: "No account found" });
  }

  try {
    await User.deleteOne({ _id: userId });
    res.status(200).send("acount has been deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
}

export default deleteUser;
