const repositories = require("../Repository");
const Roles = new repositories.roles();

const getAll = async () => {
  return await Roles.getAll();
};

const getById = async (id) => {
  const include = [];
  const exclude = ["createdAt", "updatedAt", "deletedAt"];
  const resp = await Roles.getById(id, include, exclude);
  if (!resp) return { statusCode: 404, error: "Role not found." };
  else return { statusCode: 200, roles: resp.dataValues };
};

const createRole = async (role) => {
  return await Roles.createObject(role);
};

const editRole = async (role, id) => {
  const resp = await Roles.updateObject(role, id);
  if (resp == 0) return { statusCode: 404, error: "Role not found." };
  else return { statusCode: 200, resp: "Role updated." };
};

const deleteRole = async (id) => {
  const resp = await Roles.deleteById(id);
  if (resp == 0) return { statusCode: 404, error: "Role not found." };
  else return { statusCode: 200, resp: "Role deleted." };
};

module.exports = {
  getAll,
  getById,
  createRole,
  editRole,
  deleteRole,
};
