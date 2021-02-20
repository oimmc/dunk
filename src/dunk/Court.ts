import Canvas from './Canvas'
import Rebound from './Rebound'
import Person from './Guy'

class Dunk {
	canvas: Canvas
	rebound: Rebound
	person: Person
	
	constructor() {
		
		this.canvas = new Canvas({
			el: 'canvas'
		})

		this.init()
		this.run()
	}

	init() {
		this.rebound = new Rebound({
			canvas: this.canvas
		})

		this.person = new Person({
			canvas: this.canvas
		})
	}

	run() {
		setInterval(() => {
			this.canvas.clearRect()

			this.rebound.draw()
			this.person.move()
		}, 1000)
	}
}

const dunk = new Dunk()

// setTimeout(() => {
// 	dunk.run()
// }, 500)

// module.exports = Dunk

