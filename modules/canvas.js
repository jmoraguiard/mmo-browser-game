class Canvas {
    constructor() {
        this.element = document.querySelector('#canvas')
        // store dimensions to be used for entity positioning reference
        this.dimensions = this.element.getBoundingClientRect()
    }
}
  
const canvas = new Canvas()

export default canvas