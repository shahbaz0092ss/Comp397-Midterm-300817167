var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // public properties
        // Constructor
        function Island(level) {
            var _this = _super.call(this, "island") || this;
            _this._level = level;
            if (_this._level == 2) {
                _this.rotation = 90;
            }
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island.prototype.Start = function () {
            this._dy = 5;
            this._dx = 5;
            this.Reset();
        };
        // updates the game object every frame
        Island.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Island.prototype.Reset = function () {
            if (this._level == 1) {
                this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
                this.y = -this.height;
            }
            else if (this._level == 2) {
                this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
                this.x = this.width + 640;
            }
        };
        Island.prototype.Move = function () {
            if (this._level == 1) {
                this.y += this._dy;
            }
            else if (this._level == 2) {
                this.x -= this._dx;
            }
        };
        Island.prototype.CheckBounds = function () {
            if (this._level == 1) {
                if (this.y >= 480 + this.height) {
                    this.Reset();
                }
            }
            else if (this._level == 2) {
                if (this.x <= 0 - this.width) {
                    this.Reset();
                }
            }
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map