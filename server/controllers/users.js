exports.list = function (req, res) {
  res.json([{id: 1, name: "User name"}])
}

exports.getById = function (req, res) {
  res.json({id: req.params.id, name: "User Name"})
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

