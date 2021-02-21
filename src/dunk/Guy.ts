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

	head_x = 40
	head_y = 180
	dx = 0
	dy = 0

    //body起点
    body_x = 30
    body_y = 196

    //曲线起点
    x1 = 41
    y1 = 246
    // 控制点1
	cx1 = 186
    cy1 = 254
    // 控制点2
    cx2 = 120
    cy2 = 27
    //终点
    x2 = 198
    y2 = 128
	t = 0

	constructor(props: GuyProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		// this.draw()
	}

	position(x1: number, y1:number, cx1: number, cy1: number, cx2: number, cy2: number, x2: number, y2: number) {
		const x = x1 * Math.pow((1 - this.t), 3) + 3 * cx1 * this.t * Math.pow((1 - this.t), 2) + 3 * cx2 * Math.pow(this.t, 2) * (1 - this.t) + x2 * Math.pow(this.t, 3)
        const y = y1 * Math.pow((1 - this.t), 3) + 3 * cy1 * this.t * Math.pow((1 - this.t), 2) + 3 * cy2 * Math.pow(this.t, 2) * (1 - this.t) + y2 * Math.pow(this.t, 3)
		// console.log(x,y)
		return { x, y }
	}

	draw() {
		//轨迹线
        this.ctx.beginPath()
        this.ctx.moveTo(41, 246)
        this.ctx.bezierCurveTo(this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
        this.ctx.stroke()
		// this.ctx.translate(this.dx, this.dy)
		if (this.t > 1) {
            this.t = 0

			this.head_x = 40
			this.head_y = 180

            this.body_x = 30
            this.body_y = 196
            return
        }

		// this.x = this.x1 * Math.pow((1 - this.t), 3) + 3 * this.cx1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cx2 * Math.pow(this.t, 2) * (1 - this.t) + this.x2 * Math.pow(this.t, 3)
        // this.y = this.y1 * Math.pow((1 - this.t), 3) + 3 * this.cy1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cy2 * Math.pow(this.t, 2) * (1 - this.t) + this.y2 * Math.pow(this.t, 3)

		this.drawHead()
		this.drawBody()

	}

	drawHead() {
		const {x, y} = this.position(this.head_x, this.head_y, this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
		this.head_x = x
		this.head_y = y
		this.canvas.bezierElliptic(this.head_x, this.head_y, 10, 13)
	}

	drawBody() {
		//贝塞尔曲线 人物
		const {x, y} = this.position(this.body_x, this.body_y, this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
		this.body_x = x
		this.body_y = y
		this.ctx.beginPath()
		this.ctx.rect(this.body_x, this.body_y, 20, 30)
		this.ctx.fillStyle = '#09c'
		this.ctx.fill()

		const body = document.createElement('canvas')
		const ctx = body.getContext('2d')
		body.width = 300
		body.height = 300
		ctx.beginPath()
		ctx.fillStyle = 'red'
		ctx.rect(0, 0, 20, 30)
		ctx.fill()
		this.ctx.drawImage(body, 30, 30)

		// const path = new Path2D()
		// path.moveTo(220, 60)
		// path.arc(170, 60, 50, 0, 2 * Math.PI)
		// this.ctx.stroke(path)

		this.ctx.lineWidth = 2
		this.ctx.lineCap = 'round'
		this.ctx.lineJoin = 'round'
		this.ctx.beginPath()
		this.ctx.moveTo(10,10)
		this.ctx.lineTo(200, 100)
		this.ctx.lineTo(250,10)
		this.ctx.stroke()
		this.ctx.lineWidth = 1
	}

	move() {
		this.draw()
		// this.t += 0.08
		// this.dx += 10
		// this.dy += 10
		// this.x += 10
		// // console.log(this.x, this.y)
		// if (this.x > 190) {
		// 	// return
		// 	this.x = 100
		// 	// this.y +=20
		// }
		// this.canvas.clearRect()
		// this.canvas.bezierElliptic(this.x, this.y, 10, 13)

		// const update = () => {
		// 	let animFrame = requestAnimationFrame(update)
		// }
		// update()
	}
}