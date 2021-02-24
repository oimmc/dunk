import Canvas from './Canvas'
// import { requestAnimationFrame, cancelAnimationFrame } from '../utils'

export interface BallProps {
	canvas: Canvas
}

export default class Ball{
	canvas: Canvas
	ctx: CanvasRenderingContext2D

	//篮球起点 ball2
	x = 60
	y = 165
	//曲线起点 ball2
	x1 = 60
	y1 = 165
	// 控制点1  ball2
	cx1 = 60
	cy1 = 80
	// 控制点2
	cx2 = 270
	cy2 = -40
	//终点
	x2 = 215
	y2 = 130

	t = 0
	
	constructor(props: BallProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		// this.draw()
	}

	init() {
		this.t = 0
		this.x = 60
		this.y = 170
	}

	draw() {
		if (this.t > 1) {
			return this.init()
		}
		this.x = this.x1 * Math.pow((1 - this.t), 3) + 3 * this.cx1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cx2 * Math.pow(this.t, 2) * (1 - this.t) + this.x2 * Math.pow(this.t, 3)
		this.y = this.y1 * Math.pow((1 - this.t), 3) + 3 * this.cy1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cy2 * Math.pow(this.t, 2) * (1 - this.t) + this.y2 * Math.pow(this.t, 3)
		this.ctx.beginPath()
		this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)
		this.ctx.fillStyle = '#633'
		this.ctx.fill()
		this.ctx.strokeStyle = '#339966'
		this.ctx.stroke()
		this.ctx.strokeStyle = '#000'
	}
	
	move() {
		this.draw()
		this.t += 0.06
	}
}