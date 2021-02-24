import Canvas from './Canvas'

interface GuyProps {
	canvas: Canvas
}

export default class Guy {
	canvas: Canvas
	ctx: CanvasRenderingContext2D

	head_x = 38
	head_y = 184

	//body起点
	body_x = 30
	body_y = 196

	// 胳膊
	arm_r_end_x = 46
	arm_l_end_x = 48

	//起点
	x1 = 41
	y1 = 246
	//终点
	x2 = 198
	y2 = 128
	// 控制点1
	cx1 = 186
	cy1 = 254
	// 控制点2
	cx2 = 120
	cy2 = 27

	t = 0

	constructor(props: GuyProps) {
		const { canvas } = props
		this.canvas = canvas
		this.ctx = this.canvas.getCtx()
		// this.draw()
	}

	init() {
		this.t = 0

		this.head_x = 38
		this.head_y = 184

		this.body_x = 30
		this.body_y = 196

		this.arm_l_end_x = 48
		this.arm_r_end_x = 46
	}

	draw() {
		if (this.t > 1) {
			return this.init()
		}

		// 头
		this.canvas.bezierElliptic(38, 184, 10, 10)

		// 身体
		this.ctx.fillStyle = 'red'
		this.canvas.bezierElliptic(40, 216, 10, 20, 1, 0.9, true)

		// 裤子
		this.ctx.fillStyle = '#007fff'
		this.canvas.bezierElliptic(42, 243, 9, 6, 1, 1, true)

		// 胳膊
		this.ctx.lineCap = 'round'
		this.ctx.lineJoin = 'round'
		this.ctx.beginPath()
		
		// 左胳膊
		if (this.arm_l_end_x > 54) {
			this.arm_l_end_x = 54
		}
		this.ctx.moveTo(48, 200)
		this.ctx.lineTo(52, 196)
		this.ctx.lineTo(this.arm_l_end_x, 176)
		// 右胳膊
		this.ctx.moveTo(42, 206)
		this.ctx.lineTo(56, 200)
		if (this.arm_r_end_x > 56) {
			this.arm_r_end_x = 56
		}
		this.ctx.lineTo(this.arm_r_end_x, 175)
		this.ctx.stroke()

		// 腿
		this.ctx.lineCap = 'round'
		this.ctx.lineJoin = 'round'
		// 左腿
		this.ctx.beginPath()
		this.ctx.moveTo(40, 251)
		this.ctx.lineTo(40, 270)
		this.ctx.lineTo(28, 292)
		// 左脚
		this.ctx.lineTo(32, 292)
		
		// 右腿
		this.ctx.moveTo(45, 251)
		this.ctx.lineTo(48, 270)
		this.ctx.lineTo(44, 292)
		// 右脚
		this.ctx.lineTo(48, 292)
		this.ctx.stroke()

		this.arm_l_end_x += 12
		this.arm_r_end_x += 12
	}

	move() {
		this.draw()
		this.t += 0.06
	}
}