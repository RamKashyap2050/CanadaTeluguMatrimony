const asyncHandler = require("express-async-handler");
const Users = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
    console.log(first_name,last_name,email,password)
  if (!first_name || !last_name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields!");
  }

  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await Users.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
    bio: "",
    date_of_birth: null,
    gender: "",
    phone: "",
    address: { apt: "", street: "", city: "", province: "", postal: "" },
    image: "",
    community: null,
    caste: null,
    visa_status: "",
  });

  if (!user) {
    res.status(400);
    throw new Error("Something went wrong");
  }

  res.status(201).json({
    _id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    token: await generateToken(user.id),
    message: "You are registered",
  });

});

const updateUser = asyncHandler(async (req, res) => {
  const { address, habits, ...dataToUpdate } = req.body;

  const parsedAddress = JSON.parse(address);
  const parsedHabits = JSON.parse(habits);

  const updatednurse = await Nurses.findByIdAndUpdate(
    req.nurse._id,
    dataToUpdate,
    {
      new: true,
    }
  );

  res.status(200).json({
    ...updatednurse._doc,
    token: await generateToken(updatednurse.email),
  });
});

const generateToken = async (id) => {
  return await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser };
