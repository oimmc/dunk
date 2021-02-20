import Canvas from './Canvas'
import { requestAnimationFrame, cancelAnimationFrame } from '../utils'

interface GuyProps {
	canvas: Canvas
}

interface HeaderProps{
	canvas: Canvas
}

class Header {
	canvas: Canvas
	x = 100
	y = 60

	constructor(props: HeaderProps) {
		const { canvas } = props
		this.canvas = canvas
	}
}

export default class Guy {
	canvas: Canvas
	ctx: CanvasRenderingContext2D

	x = 100
	y = 60
	translateX = 0

	constructor(props: GuyProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		// this.draw()
	}

	// draw() {
	// 	this.canvas.bezierElliptic(this.x, this.y, 10, 13)
	// }

	move() {
		this.x += 10
		// console.log(this.x, this.y)
		if (this.x > 190) {
			// return
			this.x = 100
			// this.y +=20
		}
		// this.canvas.clearRect()
		this.canvas.bezierElliptic(this.x, this.y, 10, 13)

		// const update = () => {
		// 	let animFrame = requestAnimationFrame(update)
		// }
		// update()
	}
}