import express from "express";
import Note from "../models/notes.js";
import isLoggedIn from "../utils/isLoggedIn.js";

const router = express.Router();

router.use(isLoggedIn);

// index
router.get("/", async (req, res) => {
  try {
    const username = req.payload.username;
    const notes = await Note.find({ username });
    res.json(notes);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// show
router.get("/:id", async (req, res) => {
  try {
    const username = req.payload.username;
    const note = await Note.findOne({ username, _id: req.params.id });
    res.json(note);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// create
router.post("/", async (req, res) => {
  try {
    const username = req.payload.username;
    req.body.username = username;
    const note = await Note.create(req.body);
    res.json(note);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const username = req.payload.username;
    req.body.username = username;
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(note);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// destroy
router.delete("/:id", async (req, res) => {
  try {
    const username = req.payload.username;
    req.body.username = username;
    const note = await Note.deleteOne({_id: req.params.id, username});
    res.json(note);
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
