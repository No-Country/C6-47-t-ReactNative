const { Roles, Post, User, Tags } = require("../models/");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

const createRoles = async () => {
  const { count } = await Roles.findAndCountAll();

  if (count > 0) return;

  let values = [];

  const user = await Roles.create({ role: "user" });
  values.push(user);

  const admin = await Roles.create({ role: "admin" });
  values.push(admin);

  // const values = await Promise.all([
  //   Roles.create({ role: "user" }),
  //   Roles.create({ role: "guess" }),
  //   Roles.create({ role: "admin" }),
  // ]);
  console.log(values);
};

const createUser = async () => {
  const { count } = await User.findAndCountAll();

  if (count > 0) return;

  const passwordHashed = await bcrypt.hash("123", 10);
  const values = await Promise.all([
    User.create({
      username: "yache",
      password_hash: passwordHashed,
      email: "juli@yache.com",
      roleId: 2,
    }),
  ]);
  console.log(values);
};

const createTags = async () => {
  const { count } = await Tags.findAndCountAll();

  if (count > 0) return;

  const values = [];

  const javascript = await Tags.create({ name: "javascript" });
  values.push(javascript);
  const python = await Tags.create({ name: "python" });
  values.push(python);

  console.log(values);
};

const createPosts = async () => {
  const { count } = await Post.findAndCountAll();

  if (count > 0) return;

  for (let i = 0; i < 50; i++) {
    const tagId = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    Post.create({
      title: faker.commerce.productName(),
      content: faker.lorem.paragraphs(5),
      userId: 1,
      tagId: tagId,
      mediaURL: faker.image.cats(),
    });
  }
  // const values = await Promise.all([
  //   Post.create({
  //     title: "Example title 1",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     userId: 1,
  //     tagId: 1,
  //   }),
  //   Post.create({
  //     title: "Example title 2",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     userId: 1,
  //     tagId: 2,
  //   }),
  //   Post.create({
  //     title: "Example title 3",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     userId: 1,
  //     tagId: 1,
  //   }),
  // ]);
};

const main = async () => {
  await createRoles();
  await createUser();
  await createTags();
  await createPosts();
};

main();
