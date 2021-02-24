// import { random } from './utils'

export interface CanvasProps {
	el: string
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
		const { el } = props

		this.el = document.querySelector(el)
		this.ctx = this.el.getContext('2d')
		
		this.el.width = 375
		this.el.height = 300
		this.el.style.background = '#ddd'
		this.el.style.border = '1px solid #bbb'
		this.el.style.display = 'block'
		this.el.style.margin = '0 auto'
	}

	getCtx() {
		return this.ctx
	}
	
	bezierElliptic(x: number, y: number, a: number, b: number, step_x = 0.5, step_y = 0.8, fill = false) {
		let ox = step_x * a,
			oy = step_y * b

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
		fill ? this.ctx.fill() : this.ctx.stroke()
		this.ctx.restore()
	}
	
	clearRect() {
		this.ctx.clearRect(0, 0, this.width, this.height)
	}

}