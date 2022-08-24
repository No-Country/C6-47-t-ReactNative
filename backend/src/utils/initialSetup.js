const { Roles, Post, User } = require("../models/");
const bcrypt = require("bcryptjs");

const createRoles = async () => {
  const { count } = await Roles.findAndCountAll();

  if (count > 0) return;

  const values = await Promise.all([
    Roles.create({ role: "user" }),
    Roles.create({ role: "guess" }),
    Roles.create({ role: "admin" }),
  ]);
  console.log(values);
};

const createUser = async () => {
  const { count } = await User.findAndCountAll();

  if (count > 0) return;

  const passwordHashed = await bcrypt.hash("123", 10);
  console.log(passwordHashed);
  const values = await Promise.all([
    User.create({
      username: "yache",
      password: passwordHashed,
      roleId: 3,
    }),
  ]);
  console.log(values);
};

const createPosts = async () => {
  const { count } = await Post.findAndCountAll();

  if (count > 0) return;

  const values = await Promise.all([
    Post.create({
      title: "Example title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      userId: 1,
    }),
    Post.create({
      title: "Example title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      userId: 1,
    }),
    Post.create({
      title: "Example title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      userId: 1,
    }),
  ]);
  console.log(values);
};

const main = async () => {
  await createRoles();
  await createUser();
  await createPosts();
};

main();
