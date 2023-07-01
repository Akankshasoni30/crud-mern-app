const express = require('express');
const Student = require('../models/Student');

const router = express.Router()
router.post("/createstudent",
    async (req, res) => {

        try {
            await
                Student.create({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    phone: req.body.phone
                })
            res.json({ success: true });
        }
        catch (error) {
            console.log(error)
            res.json({ success: false });

        }

    });

    router.get("/readstudent", (req, res) => {
        Student.find()
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            next(error);
          });
      });
     
     
      
      router.route("/update-student/:id")
      // Get Single Student
      .get((req, res, next) => {
          Student.findById(req.params.id)
              .then((data) => {
                  res.json(data);
              })
              .catch((error) => {
                  next(error);
              });
      });
    // Update Student Data
   router.put("/students/:id", (req, res, next) => {
     const id = req.params.id;
     const updatedData = req.body;
     Student.findByIdAndUpdate(id, updatedData, { new: true })
         .then((updatedStudent) => {
           console.log(updatedData)
         res.json(updatedStudent);
       })
       .catch((err) => {
         console.error("Error updating student:", err);
         res.status(500).send("Internal Server Error");
       });
   });

   router.delete("/delete-student/:id", (req, res, next) => {
    Student
      .findByIdAndRemove(req.params.id)
      .then((data) => {
        res.status(200).json({
          msg: data,
        });
      })
      .catch((error) => {
        next(error);
      });
  });
module.exports = router;