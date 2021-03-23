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

exports.create = async function (req, res) {
  const created = await User.create(req.body)
  res.json(created)
}

exports.update = function (req, res) {
  const updated = await User.update(req.body, {id: req.params.id})
  res.json(updated)
}

exports.delete = function (req, res) {
  res.json({ success: true })
}

