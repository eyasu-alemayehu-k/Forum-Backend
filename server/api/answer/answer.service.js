const pool = require("../../config/database");

module.exports = {
  addAnswers: (data, callback) => {
    pool.query(
      `INSERT INTO answer (answer, answer_code_block, user_id, question_id	) VALUES (?, ?, ?, ?)`,
      [data.answer, data.answer_code_block, data.user_id, data.question_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getAllAnswers: (callback) => {
    pool.query(`SELECT * FROM answer`, [], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },
  getAnswerById: (aid, callback) => {
    pool.query(
      `SELECT * FROM answer WHERE answer_id	_id = ?`,
      [aid],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getAnswerByQid: (qid, callback) => {
    pool.query(
      `SELECT * FROM answer WHERE question_id = ?`,
      [qid],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  countAnswerByQid: (qid, callback) => {
    pool.query(
      `SELECT COUNT(*) FROM answer WHERE question_id = ?`,
      [qid],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  answeredQuestionByQid: (callback) => {
    pool.query(
      `SELECT DISTINCT question.question_id, question.* FROM question INNER JOIN answer ON question.question_id = answer.question_id WHERE answer.answer_id IS NOT NULL ORDER BY question.question_id DESC`,
      [],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  unAnsweredQuestionByQid: (callback) => {
    pool.query(
      `SELECT DISTINCT question.question_id, question.* FROM question LEFT JOIN answer ON question.question_id = answer.question_id WHERE answer.answer_id IS NULL ORDER BY question.question_id DESC`,
      [],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
