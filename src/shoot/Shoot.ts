import Canvas from './Canvas'
import Rebound from './Rebound'
import Guy from './Guy'
import Ball from './Ball'

export default class Court {
	canvas: Canvas
	rebound: Rebound
	guy: Guy
	ball: Ball
	
	constructor() {
		
		this.canvas = new Canvas({
			el: 'canvas'
		})

		this.init()
		this.draw()
	}

	init() {
		this.rebound = new Rebound({
			canvas: this.canvas
		})

		this.guy = new Guy({
			canvas: this.canvas
		})

		this.ball = new Ball({
			canvas: this.canvas
		})
	}

	draw() {
		setInterval(() => {
			this.canvas.clearRect()

			this.ball.move()
			this.rebound.draw()
			this.guy.move()
			
		}, 200)

		// const update = () => {
		// 	let animFrame = requestAnimationFrame(update)
		// 	this.canvas.clearRect()

		// 	this.ball.move()
		// 	this.rebound.draw()
		// 	this.guy.move()
		// }
		// update()
	}
}
