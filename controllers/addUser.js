import User from "../models/User.js";

//for creating new documents
async function addUser(req, res) {
  const { fullName, email, password, age } = req.body;
  const userDetails = await User.create({
    fullName: fullName,
    email: email,
    password: password,
    age: age,
  });

  console.log(userDetails);
  res.status(201).json({ message: "Registered successfully" });
}
export default addUser;
