/** dunk.iife.js */
(function () {
	'use strict';

	var Canvas = (function () {
	    function Canvas(props) {
	        var el = props.el, width = props.width, height = props.height; props.hue;
	        this.el = document.querySelector(el);
	        this.ctx = this.el.getContext('2d');
	        this.el.width = width || 300;
	        this.el.height = height || 300;
	        this.el.style.background = '#ddd';
	        this.el.style.display = 'block';
	        this.el.style.margin = '0 auto';
	    }
	    Object.defineProperty(Canvas.prototype, "width", {
	        get: function () {
	            return this.el.width;
	        },
	        set: function (width) {
	            this.el.width = width;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "height", {
	        get: function () {
	            return this.el.height;
	        },
	        set: function (height) {
	            this.el.height = height;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Canvas.prototype.getCtx = function () {
	        return this.ctx;
	    };
	    Canvas.prototype.drawArc = function (x, y, r, sAngle, eAngle, counterclockwise, fillStyle, isFill) {
	        if (fillStyle === void 0) { fillStyle = '#666'; }
	        if (isFill === void 0) { isFill = false; }
	        this.ctx.beginPath();
	        this.ctx.fillStyle = fillStyle;
	        this.ctx.arc(x, y, r, sAngle, eAngle, counterclockwise);
	        isFill ? this.ctx.fill() : this.ctx.stroke();
	    };
	    Canvas.prototype.drawRect = function (x, y, width, height, fillStyle, isFill) {
	        if (fillStyle === void 0) { fillStyle = '#000'; }
	        if (isFill === void 0) { isFill = false; }
	        this.ctx.beginPath();
	        this.ctx.fillStyle = fillStyle;
	        this.ctx.rect(x, y, width, height);
	        isFill ? this.ctx.fill() : this.ctx.stroke();
	    };
	    Canvas.prototype.bezierElliptic = function (x, y, a, b) {
	        var ox = 0.5 * a, oy = 0.8 * b;
	        this.ctx.fillStyle = '#ddd';
	        this.ctx.save();
	        this.ctx.translate(x, y);
	        this.ctx.rotate(-5 * Math.PI / 180);
	        this.ctx.beginPath();
	        this.ctx.moveTo(0, b);
	        this.ctx.bezierCurveTo(ox, b, a, oy, a, 0);
	        this.ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b);
	        this.ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
	        this.ctx.bezierCurveTo(-a, oy, -ox, b, 0, b);
	        this.ctx.closePath();
	        this.ctx.fill();
	        this.ctx.stroke();
	        this.ctx.restore();
	    };
	    Canvas.prototype.clearRect = function () {
	        this.ctx.clearRect(0, 0, this.width, this.height);
	    };
	    return Canvas;
	}());

	var requestAnimationFrame = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };

	var Rebounds = (function () {
	    function Rebounds(props) {
	        this.x = 200;
	        this.y = 50;
	        this.xx = 200;
	        this.yy = 50;
	        this.r = 30;
	        this.sAngle = 0;
	        this.yAngle = Math.PI * 2;
	        this.angle = 0;
	        this.anglex = 0;
	        this.radians = 0;
	        this.radiansx = 0;
	        var canvas = props.canvas;
	        this.canvas = canvas;
	        this.ctx = this.canvas.getCtx();
	        this.draw();
	    }
	    Rebounds.prototype.draw = function () {
	        this.drawBoard();
	        this.drawBasketRing();
	    };
	    Rebounds.prototype.drawBoard = function () {
	        this.ctx.beginPath();
	        this.ctx.moveTo(180, 10);
	        this.ctx.lineTo(180, 80);
	        this.ctx.lineTo(280, 70);
	        this.ctx.lineTo(280, 0);
	        this.ctx.lineTo(180, 10);
	        this.ctx.moveTo(210, 65);
	        this.ctx.lineTo(252, 61);
	        this.ctx.lineTo(252, 28);
	        this.ctx.lineTo(210, 32);
	        this.ctx.lineTo(210, 65);
	        this.ctx.stroke();
	        this.ctx.restore();
	    };
	    Rebounds.prototype.drawBasketRing = function () {
	        this.canvas.bezierElliptic(215, 60, 20, 4);
	    };
	    Rebounds.prototype.update = function () {
	        var update = function () {
	            requestAnimationFrame(update);
	        };
	        update();
	    };
	    return Rebounds;
	}());

	var Person = (function () {
	    function Person(props) {
	        this.x = 100;
	        this.y = 60;
	        this.translateX = 0;
	        var canvas = props.canvas;
	        this.canvas = canvas;
	        this.ctx = this.canvas.getCtx();
	        this.draw();
	    }
	    Person.prototype.draw = function () {
	        this.ctx.beginPath();
	        this.canvas.bezierElliptic(this.x, this.y, 10, 15);
	    };
	    Person.prototype.move = function () {
	        this.x += 20;
	        console.log(this.x, this.y);
	        if (this.x > 190) {
	            this.x = 190;
	            this.y += 20;
	        }
	        this.canvas.bezierElliptic(this.x, this.y, 10, 15);
	    };
	    return Person;
	}());

	var Dunk = (function () {
	    function Dunk() {
	        this.canvas = new Canvas({
	            el: 'canvas'
	        });
	        this.init();
	        this.update();
	    }
	    Dunk.prototype.init = function () {
	        this.rebounds = new Rebounds({
	            canvas: this.canvas
	        });
	        this.person = new Person({
	            canvas: this.canvas
	        });
	    };
	    Dunk.prototype.update = function () {
	        var _this = this;
	        setInterval(function () {
	            _this.canvas.clearRect();
	            _this.rebounds.draw();
	            _this.person.move();
	        }, 300);
	    };
	    return Dunk;
	}());
	new Dunk();

}());
