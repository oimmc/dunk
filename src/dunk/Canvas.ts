// import { random } from './utils'

export interface CanvasProps {
	el: string
	width?: number
	height?: number
	hue?: number
}

export default class Canvas {
	el: HTMLCanvasElement
	ctx: CanvasRenderingContext2D

	get width(): number {
		return this.el.width
	}

	set width(width: number) {
		this.el.width = width
	}

	get height(): number {
		return this.el.height
	}

	set height(height: number) {
		this.el.height = height
	}
	
	constructor(props: CanvasProps) {
		const { el, width, height, hue } = props

		this.el = document.querySelector(el) as HTMLCanvasElement
		this.ctx = this.el.getContext('2d')
		
		this.el.width = width || 300
		this.el.height = height || 300
		this.el.style.background = '#ddd'
		this.el.style.display = 'block'
		this.el.style.margin = '0 auto'
	}

	getCtx() {
		return this.ctx
	}
	
	drawArc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise: boolean, fillStyle = '#666', isFill = false) {
		this.ctx.beginPath()
		this.ctx.fillStyle = fillStyle
		// ctx.arc(x, y, r, 0, Math.PI, false);   // 口(顺时针)
		this.ctx.arc(x, y, r, sAngle, eAngle, counterclockwise)
		isFill ? this.ctx.fill() : this.ctx.stroke()
	}
	
	drawRect(x: number, y: number, width: number, height: number, fillStyle = '#000', isFill = false) {
		this.ctx.beginPath()
		this.ctx.fillStyle = fillStyle
		// this.ctx.lineWidth = 0
		this.ctx.rect(x, y, width, height)
		isFill ? this.ctx.fill() : this.ctx.stroke()
	}

	bezierElliptic(x: number, y: number, a: number, b: number) {
		let ox = 0.5 * a,
			oy = 0.8 * b

		this.ctx.fillStyle = '#ddd'
		this.ctx.save()
		this.ctx.translate(x, y)
		this.ctx.rotate(-5 * Math.PI / 180)
		this.ctx.beginPath()
		
		this.ctx.moveTo(0, b)
		this.ctx.bezierCurveTo(ox, b, a, oy, a, 0)
		this.ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b)
		this.ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0)
		this.ctx.bezierCurveTo(-a, oy, -ox, b, 0, b)

		this.ctx.closePath()
		this.ctx.fill()
		this.ctx.stroke()
		this.ctx.restore()
	}
	
	clearRect() {
		this.ctx.clearRect(0, 0, this.width, this.height)
	}

}