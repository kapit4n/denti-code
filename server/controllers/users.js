const { Op } = require('sequelize');
const models = require('../models');

const { User, ClientFile } = models;

exports.list = async function (req, res) {
  const users = await User.findAll({ include: ClientFile })
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

exports.update = async function (req, res) {
  const updated = await User.update(req.body, { id: req.params.id })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await User.destroy({ where: { id: req.params.id } })
  res.json(result)
}

