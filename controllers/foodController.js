const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Food.find(req.query)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Food.findById(req.params.id)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Food.create(req.body)
    .then(dbFood => res.json(dbFood))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Food.findById(req.params.id)
      .then(dbFood => dbFood.remove())
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  }
};
