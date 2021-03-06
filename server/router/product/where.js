var db = require('../../lib/db');

module.exports = function*(next) {
    try {
        var _id = this.params._id;
        var a = yield db.Group.find({children:{$in:[_id]}}).exec();
        this.body = {
            err: false,
            state: true,
            list: a
        }
    } catch (error) {
        this.logger.error(error);
        yield next;
    }
}