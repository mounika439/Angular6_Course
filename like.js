"use strict";
exports.__esModule = true;
var likeButton = /** @class */ (function () {
    function likeButton(numberOfLikes, state) {
        this.numberOfLikes = numberOfLikes;
        this.state = state;
    }
    likeButton.prototype.click = function () {
        if (this.state == false) {
            this.numberOfLikes = +1;
            this.state = true;
        }
        else {
            this.numberOfLikes = this.numberOfLikes - 1;
            this.state = false;
        }
        console.log('number of likes : ' + this.numberOfLikes + ' state : ' + this.state);
    };
    return likeButton;
}());
exports.likeButton = likeButton;
