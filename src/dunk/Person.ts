import Canvas from './Canvas'
import { requestAnimationFrame, cancelAnimationFrame } from '../utils'

interface PersonProps {
	canvas: Canvas
}

interface HeaderProps{
	canvas: Canvas
}

class Header {
	canvas: Canvas
	x = 100
	y = 60
	xx = 200
	yy = 50
	r = 30
	sAngle = 0
	yAngle = Math.PI * 2
	angle = 0
	anglex = 0
	radians = 0
	radiansx = 0

	constructor(props: HeaderProps) {
		const { canvas } = props
		this.canvas = canvas
		this.canvas.drawArc(this.x, this.y, this.r, this.sAngle, this.yAngle, false)
		// this.canvas.drawLine(this.x, this.y)
	}

	update() {
		const update = () => {
			let animFrame = window.requestAnimationFrame(update)
			// this.angle = 360/10*1;
			this.angle += 20
			this.anglex += 20
			if (this.angle > 220) {
				cancelAnimationFrame(animFrame)
			}
			this.radians = this.angle * Math.PI / 180
			this.radiansx = this.anglex * Math.PI / 180
			// console.log(this.angle, this.radians)


			this.x = this.x + Math.cos(this.radians) * this.r / 1
			this.y = this.y + Math.sin(this.radians) * this.r / 1
			this.xx = this.xx + Math.cos(this.radiansx) * (this.r - 2) / 1
			this.yy = this.yy + Math.sin(this.radiansx) * (this.r - 2) / 1
			
			if (this.angle <= 120) {
				// this.canvas.clearRect()
			}
			// this.canvas.clearRect()
			this.canvas.drawArc(this.x, this.y, this.r, this.sAngle, this.yAngle, false)
		}
		update()
	}
}

export default class Person {
	canvas: Canvas
	ctx: CanvasRenderingContext2D

	x = 100
	y = 60
	translateX = 0

	constructor(props: PersonProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		this.draw()
		// this.drawBasketRing()
	}

	draw() {
		this.ctx.beginPath()
		this.canvas.bezierElliptic(this.x, this.y, 10, 15)
	}

	move() {
		this.x += 20
		console.log(this.x, this.y)
		if (this.x > 190) {
			// return
			this.x = 190
			this.y +=20
		}
		// this.canvas.clearRect()
		this.canvas.bezierElliptic(this.x, this.y, 10, 15)

		// const update = () => {
		// 	let animFrame = requestAnimationFrame(update)
		// }
		// update()
	}
}