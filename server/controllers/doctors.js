const { Op } = require('sequelize');
const models = require('../models');

const { Doctor } = models;

exports.list = async function (req, res) {
  const doctors = await Doctor.findAll()
  res.json(doctors)
}

exports.getById = async function (req, res) {
  const doctor = await Doctor.findOne({ where: { id: req.params.id } })
  res.json(doctor)
}

exports.create = async function (req, res) {
  const created = await Doctor.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await Doctor.update(req.body, { id: req.params.id })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await Doctor.destroy({ where: { id: req.params.id } })
  res.json(result)
}

