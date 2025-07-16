/*
class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){  // FUNCTION
        const area = this.width * this.height;
        return area;
    }

    paint(){  // FUNCTION
        console.log('Painting with color ${this.color}');
    }
}

const rect = new Rectangle(2,4);
const area = rect.area();
console.log(area);
*/

/*   // ANOTHER WAY TO APPROACH ABOVE...
const rect1 = {
    width: 2,
    height: 3,
    color: "red"
}

function area(rect){
return rect.width * rect.height;
}

const ans = area(rect1);
console.log(ans);
*/

class Rectangle{
    constructor(width,height,color){
        this.width = width;  // this. GIVE ACCESS TO THE CURRENT OBJECT INSIDE THE CONSTRUCTOR.
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        // console.log(this);
        return area;
    }

    paint(){
        console.log("Painting with color " + this.color);
    }
}

const rect = new Rectangle(3,5,"Orange.");  // Creating the instance of the rectangle class, object of the rectangle class.
const area = rect.area();
const paint = rect.paint();
console.log(area);