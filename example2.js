/**
 * @api {post} /user 新增使用者
 * @apiVersion 0.2.0
 * @apiName AddUser
 * @apiGroup User
 *
 * @apiParam {String} username 使用者名稱
 * @apiParam {String} password 密碼
 *
 * @apiSuccess {number} code 狀態碼
 * @apiSuccess {String} message  訊息
 *
 * @apiSuccessExample Success-Response:
 *     {
 *        code: 1,
 *        message: "新增成功"
 *     }
 *
 * @apiError {number} code 狀態碼
 * @apiError {String} message  訊息
 * @apiErrorExample Error-Response:
 *     {
 *       code: 0,
 *       message: "新增失敗"
 *     }
 */
