const Gig = require("../models/Gig");

const createGig = async (req, res) => {
  if (!req.isSeller) return res.status(403).send("Only sellers can create a gig!");

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    res.status(500).send("Gig creation failed: " + err.message);
  }
};

const getGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return res.status(404).send("Gig not found!");
    res.status(200).send(gig);
  } catch (err) {
    res.status(500).send("Fetching gig failed: " + err.message);
  }
};

const getGigs = async (req, res) => {
  try {
    const q = req.query;
    const filters = {
      ...(q.userId && { userId: q.userId }),
      ...(q.cat && { cat: q.cat }),
      ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };

    const gigs = await Gig.find(filters).sort({ [q.sort || "createdAt"]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    res.status(500).send("Fetching gigs failed: " + err.message);
  }
};

module.exports = { createGig, getGig, getGigs };
