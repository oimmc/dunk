import Canvas from './Canvas'
// import { requestAnimationFrame, cancelAnimationFrame } from '../utils'

export interface BallProps {
	canvas: Canvas
}

export default class Ball{
    canvas: Canvas
	ctx: CanvasRenderingContext2D

    //篮球起点
    x = 215
    y = 215
    //曲线起点
    x1 = 215
    y1 = 215
    // 控制点1
	cx1 = 20
    cy1 = 80
    // 控制点2
    cx2 = 270
    cy2 = -40
    //终点
    x2 = 215
    y2 = 130
	t = 0

	//篮球起点 ball2
    xx = 60
    yy = 165
    //曲线起点 ball2
    xx1 = 60
	yy1 = 165
	// 控制点1  ball2
	ccx1 = 60
    ccy1 = 80

	constructor(props: BallProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		// this.draw()
	}

    draw() {
		// this.ball1()
		this.ball2()
		
        this.t += 0.06
	}

	ball1() {
		//轨迹线
        this.ctx.beginPath()
        this.ctx.moveTo(215, 215)
        this.ctx.bezierCurveTo(this.cx1, this.cy1, this.cx2, this.cy2, this.x2, this.y2)
        this.ctx.stroke()

        //贝塞尔曲线 点位控制
        if (this.t > 1) {
            this.t = 0
            this.x = 215
            this.y = 215
            return
        }
        this.x = this.x1 * Math.pow((1 - this.t), 3) + 3 * this.cx1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cx2 * Math.pow(this.t, 2) * (1 - this.t) + this.x2 * Math.pow(this.t, 3)
        this.y = this.y1 * Math.pow((1 - this.t), 3) + 3 * this.cy1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cy2 * Math.pow(this.t, 2) * (1 - this.t) + this.y2 * Math.pow(this.t, 3)
        // console.log(x, y)

        //贝塞尔曲线 篮球轨迹
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)
        this.ctx.fillStyle = '#808080'
		this.ctx.fill()
	}

	ball2() {
		//轨迹线2
        // this.ctx.beginPath()
        // this.ctx.moveTo(60, 165)
        // this.ctx.bezierCurveTo(this.ccx1, this.ccy1, this.cx2, this.cy2, this.x2, this.y2)
        // this.ctx.stroke()

        //贝塞尔曲线 点位控制2
        if (this.t > 1) {
            this.t = 0
            this.xx = 60
            this.yy = 165
            return
        }
        this.xx = this.xx1 * Math.pow((1 - this.t), 3) + 3 * this.ccx1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cx2 * Math.pow(this.t, 2) * (1 - this.t) + this.x2 * Math.pow(this.t, 3)
        this.yy = this.yy1 * Math.pow((1 - this.t), 3) + 3 * this.ccy1 * this.t * Math.pow((1 - this.t), 2) + 3 * this.cy2 * Math.pow(this.t, 2) * (1 - this.t) + this.y2 * Math.pow(this.t, 3)
        // console.log(x, y)

        //贝塞尔曲线 篮球轨迹2
        this.ctx.beginPath()
        this.ctx.arc(this.xx, this.yy, 10, 0, 2 * Math.PI)
        this.ctx.fillStyle = '#808080'
        this.ctx.fill()
        this.ctx.strokeStyle = 'red'
		this.ctx.stroke()
		this.ctx.strokeStyle = '#000'
	}

	move() {
        this.draw()

		// const update = () => {
		// 	let animFrame = requestAnimationFrame(update)
		// }
		// update()
	}

}