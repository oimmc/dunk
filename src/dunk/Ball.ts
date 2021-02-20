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
    //起点
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

	constructor(props: BallProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		// this.draw()
	}

    draw() {
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

        this.t += 0.08
	}

	move() {
        this.draw()

		// const update = () => {
		// 	let animFrame = requestAnimationFrame(update)
		// }
		// update()
	}

    // aaa() {
    //     //起点
    //     let [x1, y1] = [215, 215]
    //     //小球起点
    //     let [x, y] = [215, 215]
    //     //控制点1
    //     let [cx1, cy1] = [20, 80]
    //     //控制点2
    //     let [cx2, cy2] = [270, -40]
    //     //终点
    //     let [x2, y2] = [215, 130]
    //     // let t = 0

    //     //轨迹线
    //     const drawLine = () => {
    //         this.ctx.beginPath()
    //         this.ctx.moveTo(215, 215)
    //         this.ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2)
    //         this.ctx.stroke()
    //         this.ctx.closePath()
    //     }

    //     //贝塞尔曲线 点位控制
    //     const computedPosition = () => {
    //         console.log(x, y, this.t)
    //         // if (y > 215) {
    //         if (this.t > 1) {
    //             this.t = 0
    //             x = 215
    //             y = 215
    //             return
    //         }
    //         x = x1 * Math.pow((1 - this.t), 3) + 3 * cx1 * this.t * Math.pow((1 - this.t), 2) + 3 * cx2 * Math.pow(this.t, 2) * (1 - this.t) + x2 * Math.pow(this.t, 3)
    //         y = y1 * Math.pow((1 - this.t), 3) + 3 * cy1 * this.t * Math.pow((1 - this.t), 2) + 3 * cy2 * Math.pow(this.t, 2) * (1 - this.t) + y2 * Math.pow(this.t, 3)
    //         // console.log(x, y)
    //     }

    //     const drawPoint = () => {
    //         computedPosition()
    //         this.ctx.beginPath()
    //         this.ctx.arc(x, y, 10, 0, 2 * Math.PI)
    //         this.ctx.fillStyle = "red"
    //         this.ctx.fill()
    //     }

    //     drawLine()
    //     drawPoint()
    //     this.t += 0.08
    //     // this.t += 0.007 //动画移动速度 [0, 1]

    //     // let loopDraw = () => {
    //     //     requestAnimationFrame(loopDraw)
    //     //     // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //     //     draw()
    //     //     drawPoint()
    //     //     this.t += 0.007 //控制动画移动速度
    //     // }
    //     // loopDraw()
    // }

}