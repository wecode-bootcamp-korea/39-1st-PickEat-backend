const commentService = require("../services/commentService");
const { catchAsync } = require("../utils/error");

const createComment = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  const { content, rate } = req.body;

  if (!userId || !content || !rate || !productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  await commentService.createComment(userId, content, rate, productId);
  return res.status(201).json({
    message: "SUCCESS",
  });
});

module.exports = { createComment };