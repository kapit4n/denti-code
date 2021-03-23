const { Op } = require('sequelize');
const models = require('../models');

const { User } = models;

exports.list = async function (req, res) {
  const users = await User.findAll()
  res.json(users)
}

exports.getById = async function (req, res) {
  const user = await User.findOne({ where: { id: req.params.id } })
  res.json(user)
}

exports.create = function (req, res) {
  res.json(req.body)
}

exports.update = function (req, res) {
  res.json(req.body)
}

exports.delete = function (req, res) {
  res.json({ success: true })
}

