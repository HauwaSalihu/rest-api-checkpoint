import User from "../models/User.js";

//for update all fields in a document
async function updateUser(req, res) {
  //the params property defined in the route is destructured
  //req.params is ideal for single properrties
  const { userId } = req.params;
  const { fullName, email, password, age } = req.body;

  //check if user id is provided
  if (!userId) {
    res.status(400).json({ message: "please the user id is required" });
  }
  //validate that the values needed to the record were actually sent along with the request
  if (!fullName) {
    return res.status(400).json({ message: "please provide your full name" });
  }
  if (!email) {
    return res.status(400).json({ message: "pleae provide your email" });
  }
  if (!password) {
    return res.status(400).json({ message: "pleae provide your password" });
  }
  if (!age) {
    return res.status(400).json({ message: "pleae provide your age" });
  }

  //check if usr with the id exists
  const isUserValid = await User.findOne({ _id: userId });
  if (isUserValid === null) {
    return res.status(400).json({ message: "please provide valid user id" });
  }

  //perform db operation in the try block
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
}
export default updateUser;
