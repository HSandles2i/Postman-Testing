const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post("/", (req, res) => {
    const { firstName, lastName, dob, email, location } = req.body;

    if (!firstName || !lastName || !dob || !email || !location) {
      return res.status(400).json({ message: "Invalid property present" });
    }
  
    const newData = { firstName, lastName, dob, email, location };
  
    collection
      .insertOne(newData)
      .then((result) => {
        res.status(201).json(result); 
      })
      .catch((error) => {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error" }); // Return 500 if there's a server error
      });
  });
  

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  const { ObjectID } = require('mongodb');

  router.put('/:id', (req, res) => {
    const id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(400).json({ status: 400, message: 'Invalid ID format' });
    }
  
    const { firstName, lastName, dob, email, location } = req.body;
    
    if (!firstName || !lastName || !dob || !email || !location) {
      return res.status(400).json({ message: "Invalid property present, all fields are required" });
    }
    const updatedData = { firstName, lastName, dob, email, location };
  
    collection
      .updateOne(
        { _id: ObjectID(id) },
        { $set: updatedData }
      )
      .then((result) => {
        if (result.matchedCount === 0) {
          return res.status(404).json({ status: 404, message: "Document not found" });
        }
  
        res.status(200).json({
          message: "Successfully updated",
          modifiedCount: result.modifiedCount
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, message: 'Server error', error: err });
      });
  });
  

  return router;
};

module.exports = createRouter;