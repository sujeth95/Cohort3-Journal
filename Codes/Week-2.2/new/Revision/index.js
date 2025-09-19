class Rectangle{
    constructor(width,height,color){
        this.width = width;    //this -> gives you access to the current variable.
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2,3,"red"); // instance of the rectangle class, object of the rectangle class.
const area = rect.area();
// console.log(col)
console.log(area);
const col = rect.paint();
