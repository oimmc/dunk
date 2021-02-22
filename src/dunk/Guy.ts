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

	head_x = 38
	head_y = 184
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
        // this.ctx.beginPath()
        // this.ctx.moveTo(41, 246)
        // this.ctx.bezierCurveTo(this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
		// this.ctx.stroke()
		
		// this.ctx.translate(this.dx, this.dy)
		if (this.t > 1) {
            this.t = 0

			this.head_x = 38
			this.head_y = 184

            this.body_x = 30
            this.body_y = 196
            return
        }

		// this.x = this.x1 * Math.pow((1 - this.t), 3) + 3 * this.cx1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cx2 * Math.pow(this.t, 2) * (1 - this.t) + this.x2 * Math.pow(this.t, 3)
        // this.y = this.y1 * Math.pow((1 - this.t), 3) + 3 * this.cy1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cy2 * Math.pow(this.t, 2) * (1 - this.t) + this.y2 * Math.pow(this.t, 3)

		this.drawBody()

	}

	drawBody() {
		// 头
		const {x, y} = this.position(this.head_x, this.head_y, this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
		this.head_x = x
		this.head_y = y
		this.canvas.bezierElliptic(this.head_x, this.head_y, 10, 10)

		//贝塞尔曲线 身体
		this.ctx.fillStyle = 'red'
		this.canvas.bezierElliptic(40, 216, 10, 20, 1, 0.9, true)
		// const {x, y} = this.position(this.body_x, this.body_y, this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
		// this.body_x = x
		// this.body_y = y
		// this.ctx.beginPath()
		// this.ctx.rect(this.body_x, this.body_y, 20, 30)
		// this.ctx.fillStyle = '#09c'
		// this.ctx.fill()

		// const body = document.createElement('canvas')
		// const ctx = body.getContext('2d')
		// body.width = 300
		// body.height = 300
		// ctx.beginPath()
		// ctx.fillStyle = 'red'
		// ctx.rect(0, 0, 20, 30)
		// ctx.fill()
		// this.ctx.drawImage(body, 30, 30)

		// const path = new Path2D()
		// path.moveTo(220, 60)
		// path.arc(170, 60, 50, 0, 2 * Math.PI)
		// this.ctx.stroke(path)

		// 裤子
		// this.ctx.beginPath()
		// this.ctx.rect(34, 236, 13, 10)
		// this.ctx.fillStyle = '#007fff'
		// this.ctx.fill()
		this.ctx.fillStyle = '#007fff'
		this.canvas.bezierElliptic(42, 243, 9, 6, 1, 1, true)
		this.ctx.fillStyle = 'none'

		// 气泡
		// this.ctx.beginPath()
		// this.ctx.moveTo(75, 25)
		// this.ctx.quadraticCurveTo(25, 25, 25, 62.5)
		// this.ctx.quadraticCurveTo(25, 100, 50, 100)
		// this.ctx.quadraticCurveTo(50, 120, 30, 125)
		// this.ctx.quadraticCurveTo(60, 120, 65, 100)
		// this.ctx.quadraticCurveTo(125, 100, 125, 62.5)
		// this.ctx.quadraticCurveTo(125, 25, 75, 25)
		// this.ctx.stroke()

		// 胳膊
		this.ctx.lineCap = 'round'
		this.ctx.lineJoin = 'round'
		this.ctx.beginPath()
		this.ctx.moveTo(48, 200)
		this.ctx.lineTo(52, 196)
		this.ctx.lineTo(54, 176)
		this.ctx.moveTo(42, 206)
		this.ctx.lineTo(56, 200)
		this.ctx.lineTo(56, 175)
		this.ctx.stroke()

		// 腿
		this.ctx.lineCap = 'round'
		this.ctx.lineJoin = 'round'
		this.ctx.beginPath()
		this.ctx.moveTo(40, 251)
		this.ctx.lineTo(40, 264)
		this.ctx.lineTo(28, 278)
		this.ctx.moveTo(45, 251)
		this.ctx.lineTo(48, 262)
		this.ctx.lineTo(44, 278)
		this.ctx.stroke()
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