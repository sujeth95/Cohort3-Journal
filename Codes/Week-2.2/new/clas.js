class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        console.log(this);    // THROUGH THIS WE ARE GETTING ACCESS TO (rect) INSIDE THIS FUNCTION DEFINATION.
        return area;
    }

    paint(){
        console.log("Painting with color " + this.color);
    }
}

const rect = new Rectangle(2,4,"red");  // instance of the rectangle class, object of the rectangle class
const area = rect.area();
rect.paint();
console.log(area);

//NOTE: Focus on: Someone have created a class, how can you create a new variable of the class.