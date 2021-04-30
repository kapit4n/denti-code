const models = require('../models');

const { ClientFile, Record } = models;

exports.list = async function (req, res) {
  const clientFiles = await ClientFile.findAll()
  res.json(clientFiles)
}

exports.getById = async function (req, res) {
  const clientFile = await ClientFile.findOne({ where: { userId: req.params.id }, include: [Record] })
  res.json(clientFile)
}

exports.create = async function (req, res) {
  const created = await ClientFile.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await ClientFile.update(req.body, { id: req.params.id })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await ClientFile.destroy({ where: { id: req.params.id } })
  res.json(result)
}
