const pool = require('../configs/db.config');

const table = 'sample';

const red_color = '\x1b[31m%s\x1b[0m';
const reset_color = '\x1b[0m';
const error_message = (m, e) => console.log(red_color, m, reset_color, e);

async function get(id) {
  try {
    if (id) {
      const [rows, fields] = await pool.query(`SELECT * FROM ${table} WHERE id=?`, [id]);
      return rows[0];
    } else {
      const [rows, fields] = await pool.query(`SELECT * FROM ${table}`);
      return rows;
    }
  } catch (e) {
    // Log Errors
    error_message(`Error while getting in ${table}`, e);
    throw Error(e);
  }
}

async function create(req) {
  try {
    const { name } = req;
    const [rows, fields] = await pool.query(`INSERT INTO ${table} (name) VALUES (?)`, [name]);
    return { message: 'Created successfully' };
  } catch (e) {
    // Log Errors
    error_message(`Error while creating ${table}`, e);
    throw Error(e);
  }
}

async function update(id, req) {
  try {
    const { name } = req;
    const [rows, fields] = await pool.query(`UPDATE ${table} SET name=? WHERE id=?`, [name, id]);
    return { message: 'Updated successfully' };
  } catch (e) {
    // Log Errors
    error_message(`Error while updating ${table}`, e);
    throw Error(e);
  }
}

async function remove(id) {
  try {
    const [rows, fields] = await pool.query(`DELETE FROM ${table} WHERE id=?`, [id]);
    return { message: 'Deleted successfully' };
  } catch (e) {
    // Log Errors
    error_message(`Error while deleting ${table}`, e);
    throw Error(e);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
};
