class Canvas {
    constructor() {
        this.element = document.querySelector('#canvas');
        // store dimensions to be used for entity positioning reference
        this.dimensions = this.element.getBoundingClientRect();
    }

    add(node) {
        this.element.appendChild(node);
    }

    create(type, props) {
        // make html element
        const node = document.createElement(type); 
        
        // loop through all properties in the props object and seperate it in attr name and value pairs.
        Object.entries(props).forEach(([attr, value]) => {
            // if array of values for attribute is passed, make one string out of them.
            if (Array.isArray(value)) {
                value = value.join(' ')
            }
            // set attribute's value
            node.setAttribute(attr, value)
        });
        this.add(node);
        return node;
    }
}
  
const canvas = new Canvas()

export default canvas