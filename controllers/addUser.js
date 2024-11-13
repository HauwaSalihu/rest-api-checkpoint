import User from "../models/User.js";

//for creating new documents
async function addUser(req, res) {
  //destructuring req.body
  const { fullName, email, password, age } = req.body;
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

  //check if user with email already exists
  const userExists = await User.findOne({ email: email });
  //if conditionn to check if user exists hods a value and provide a response to the user
  if (userExists !== null) {
    return res
      .status(400)
      .json({ message: `an account with  ${email} already exists` });
  }
  try {
    //create user record using mongodb method
    const userDetails = await User.create({
      fullName: fullName,
      email: email,
      password: password,
      age: age,
    });

    console.log(userDetails);
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured", errorStatus: 500 });
  }
}
export default addUser;
