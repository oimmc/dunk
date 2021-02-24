import Canvas from './Canvas'

export interface ReboundsProps {
	canvas: Canvas
}

export default class Rebounds {
	canvas: Canvas
	ctx: CanvasRenderingContext2D

	constructor(props: ReboundsProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		this.draw()
	}

	draw() {
		this.drawGround()
		this.drawBoard()
		this.drawBasketRing()
	}

	// 地面
	drawGround() {
		this.ctx.beginPath()
		this.ctx.moveTo(0, 298)
		this.ctx.lineTo(this.canvas.width, 280)
		this.ctx.stroke()
	}

	drawBoard() {
		this.ctx.save()
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
		
		this.ctx.stroke()
		this.ctx.restore()
	}

	drawBasketRing() {
		this.canvas.bezierElliptic(215, 60, 20, 4)
	}
}