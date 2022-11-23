const express = require("express");
const commentController = require("../controllers/commentController");
const { loginRequired } = require("../utils/checkUser");

const router = express.Router();

router.post(
  "productId/:productid",
  loginRequired,
  commentController.createComment
);

module.exports = router;