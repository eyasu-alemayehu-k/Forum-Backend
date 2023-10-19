const { addAnswer, getByQId, countAnswers, answeredQuestions, unAnsweredQuestions } = require('./answer.controller');

const router = require('express').Router();


router.post("/add", addAnswer);
router.post("/qid", getByQId);
router.post("/count", countAnswers);
router.get("/answered", answeredQuestions);
router.get("/unanswered", unAnsweredQuestions);


module.exports = router;