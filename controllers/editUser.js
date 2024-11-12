import User from "../models/User.js";

//for update all fields in a document
async function updateUser(req, res) {
  const { userId } = req.params;
  const { fullName, email, password, age } = req.body;
  const userDetails = await User.findOneAndUpdate(
    { _id: userId },
    {
      fullName: fullName,
      email: email,
      password: password,
      age: age,
    },
    { new: true }
  );

  console.log(userDetails);
  res.status(201).json({ message: "Updated successfully" });
}
export default updateUser;
