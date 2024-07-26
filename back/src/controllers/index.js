const {catchedAsync} = require("../utils");





module.exports = {
    
   
    putPost:catchedAsync(require("./Post/putPost")),
    deletePost:catchedAsync(require("./Post/deletePost")),
    getAllPost:catchedAsync(require("./Post/getAllPost")),
    getPostId:catchedAsync(require("./Post/getPostId")),
    putUser:catchedAsync(require("./Users/putUser")),
    deleteUser:catchedAsync(require("./Users/deleteUser")),
    createUsers:catchedAsync(require("./Users/createUsers")),
    createPlace:catchedAsync(require("./Post/createPlace")),
    newComment:catchedAsync(require("./Comment/comment")),
    newRating:catchedAsync(require("./Rating/rating"))
}