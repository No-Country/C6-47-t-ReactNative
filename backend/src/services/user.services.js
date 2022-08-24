const repositories = require("../Repository");

const User = new repositories.user();

const getAll = async () => {
  return await User.getAll();
};

const getById = async (id) => {
  const resp = await User.getById(id);
  if (!resp) return { statusCode: 404, error: "User not found." };
  else return { statusCode: 200, resp: resp };
};

const registerUser = async (user) => {
  const userFound = await findByUsername(user.username);
  if (!userFound.error) return { error: "Username already exist." };
  else return await User.createObject(user);
};

const findByUsername = async (username) => {
  const resp = await User.findByUsername(username);
  if (!resp) return { statusCode: 404, error: "User not found." };
  else return { statusCode: 200, resp: resp };
};

const editUser = async (user, id) => {
  const resp = await User.updateObject(user, id);
  if (resp == 0) return { statusCode: 404, error: "User not found." };
  else return { statusCode: 200, resp: "User updated." };
};

const deleteUser = async (id) => {
  const resp = await User.deleteById(id);
  if (resp == 0) return { statusCode: 404, error: "User not found." };
  else return { statusCode: 200, resp: "User deleted." };
};

module.exports = {
  getAll,
  getById,
  registerUser,
  findByUsername,
  editUser,
  deleteUser,
};
