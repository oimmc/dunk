import Canvas from './Canvas'
import Rebounds from './Rebounds'
import Person from './Person'

class Dunk {
	canvas: Canvas
	rebounds: Rebounds
	person: Person
	
	constructor() {
		
		this.canvas = new Canvas({
			el: 'canvas'
		})

		this.init()
		this.update()
	}

	init() {
		this.rebounds = new Rebounds({
			canvas: this.canvas
		})

		this.person = new Person({
			canvas: this.canvas
		})
	}

	update() {
		setInterval(() => {
			this.canvas.clearRect()

			this.rebounds.draw()
			this.person.move()
		}, 300)
	}
}

const dunk = new Dunk()

// setTimeout(() => {
// 	dunk.update()
// }, 500)

// module.exports = Dunk

