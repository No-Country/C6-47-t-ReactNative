const services = require("../services");
const sequelize = require("sequelize");

const getAll = async (req, res) => {
  // Example url GET = http://localhost:8080/post
  res.json(await services.post.getAll());
};

const getObjects = async (req, res) => {
  //Example url GET = http://localhost:8080/post?size=1&page=0&filter=example
  //Testear con query parameters: "page", "size", "filter" (OPCIONALES)

  let filter = {};
  let page = 0;
  let size = 5;

  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0) {
    size = sizeAsNumber;
  }

  const tagFilter = req.query.tag;
  const wordFilter = req.query.word;

  if (wordFilter && tagFilter) {
    const searchTag = await services.tag.getByName(tagFilter);
    if (searchTag) {
      filter = {
        deletedAt: null,
        tagId: searchTag.id,
        [sequelize.Op.or]: [
          { title: { [sequelize.Op.substring]: wordFilter } },
          { content: { [sequelize.Op.substring]: wordFilter } },
        ],
      };
    }
  } else if (tagFilter) {
    const searchTag = await services.tag.getByName(tagFilter);
    if (searchTag) {
      filter = { deletedAt: null, tagId: searchTag.id };
    }
  } else if (wordFilter) {
    filter = {
      deletedAt: null,
      [sequelize.Op.or]: [
        { title: { [sequelize.Op.substring]: wordFilter } },
        { content: { [sequelize.Op.substring]: wordFilter } },
      ],
    };
  }
  const { rows, count } = await services.post.getObjects(filter, page, size);

  res.status(200).json({
    count,
    actual_page: page,
    size,
    last_page: Math.ceil(size / count - 1),
    rows,
  });
};

const getById = async (req, res) => {
  // Example url GET = http://localhost:8080/post/:id <- idPost
  const resp = await services.post.getById(req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? resp.resp : { error: resp.error });
};

const addPost = async (req, res) => {
  // Example url POST = http://localhost:8080/post <- Need body userId, title & content
  // Falta hacer la verificaci??n de los campos en la solicitud. [Ver ExpressValidator.js]???
  const postToAdd = req.body;
  const userId = req.userId;
  console.log(userId);
  const newPost = await services.post.addPost({ ...postToAdd, userId });
  res.status(200).json({ post: newPost });
};

const editPost = async (req, res) => {
  // Example url PUT =  http://localhost:8080/post/:id <- Need idPost on params & body new values
  const resp = await services.post.editPost(req.body, req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? { message: resp.resp } : { error: resp.error });
};

const deletePost = async (req, res) => {
  // Example url DELETE = http://localhost:8080/post/:id <- Need idPost on params
  const resp = await services.post.deletePost(req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? { message: resp.resp } : { error: resp.error });
};

const getByTag = async (req, res) => {
  res.json(await services.post.getByTag("javascript"));
};

module.exports = {
  getAll,
  getById,
  addPost,
  editPost,
  deletePost,
  getObjects,
  getByTag,
};
