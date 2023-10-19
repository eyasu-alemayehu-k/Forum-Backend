const { addQuestions, getQuestions, getById, countQuestion } = require('./question.controller');

const router = require('express').Router();


router.post("/add", addQuestions);
router.get("/all", getQuestions);
router.post("/qid", getById)
router.get("/count", countQuestion);


module.exports = router;