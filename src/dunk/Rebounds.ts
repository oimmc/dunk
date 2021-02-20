import { requestAnimationFrame, cancelAnimationFrame } from '../utils'
import Canvas from './Canvas'

export interface ReboundsProps {
	canvas: Canvas
}

export default class Rebounds {
	canvas: Canvas
	ctx: CanvasRenderingContext2D
	x = 200
	y = 50
	xx = 200
	yy = 50
	r = 30
	sAngle = 0
	yAngle = Math.PI * 2
	angle = 0
	anglex = 0
	radians = 0
	radiansx = 0

	constructor(props: ReboundsProps) {
		const { canvas } = props
		this.canvas = canvas
		// this.canvas.drawLine(this.x, this.y)
		this.ctx = this.canvas.getCtx()
		this.draw()
	}

	draw() {
		this.drawBoard()
		this.drawBasketRing()
	}

	drawBoard() {
		this.ctx.beginPath()

		// 篮板
		this.ctx.moveTo(180, 10)
		this.ctx.lineTo(180, 80)
		this.ctx.lineTo(280, 70)
		this.ctx.lineTo(280, 0)
		this.ctx.lineTo(180, 10)

		// 准心框
		this.ctx.moveTo(210, 65)
		this.ctx.lineTo(252, 61)
		this.ctx.lineTo(252, 28)
		this.ctx.lineTo(210, 32)
		this.ctx.lineTo(210, 65)
		
		// this.ctx.closePath()
		this.ctx.stroke()
		this.ctx.restore()
	}

	drawBasketRing() {
		this.canvas.bezierElliptic(215, 60, 20, 4)
	}

	update() {
		const update = () => {
			let animFrame = requestAnimationFrame(update)
		}
		update()
	}
}