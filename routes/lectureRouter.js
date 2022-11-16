const express = require("express");

const lectureController = require("../controllers/lectureController");

const router = express.Router();

router.get("/", lectureController.getAllLecture);
router.get("/:postId", lectureController.getLectureByPostId);
router.get("/categories/:categoryId", lectureController.getLectureByCategoryId);

module.exports = router;