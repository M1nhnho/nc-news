const db = require('../db/connection.js');

exports.selectCommentsByArticleID = (articleID) =>
{
    return db.query(
        `SELECT *
            FROM comments
            WHERE article_id = $1
            ORDER BY created_at DESC;`,
            [articleID])
        .then(({ rows }) =>
        {
            if (rows.length === 0)
            {
                return Promise.reject({ status: 404, msg: 'Not Found' });
            }
            return rows;
        });
};