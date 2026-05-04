const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found!");
    }
    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (err) {
    res.status(500).send("Fetching user failed: " + err.message);
  }
};

module.exports = { getUser };
