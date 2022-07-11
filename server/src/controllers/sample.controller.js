const sample = require('../services/sample.service');

async function getMultiple(req, res, next) {
  try {
    const results = await sample.get();
    return res.status(200).json({ success: true, results: results });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}

async function getByPK(req, res, next) {
  try {
    const results = await sample.get(req.params.id);
    return res.status(200).json({ success: true, results: results });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}

async function create(req, res, next) {
  try {
    const message = await sample.create(req.body);
    return res.status(200).json({ success: true, message: message });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}

async function update(req, res, next) {
  try {
    const message = await sample.update(req.params.id, req.body);
    return res.status(200).json({ success: true, message: message });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}

async function remove(req, res, next) {
  try {
    const message = await sample.remove(req.params.id);
    return res.status(200).json({ success: true, message: message });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}

module.exports = {
  getMultiple,
  getByPK,
  create,
  update,
  remove,
};
