let array = [];

class Polygon {

    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
    return this.sides.length
    }

    get perimeter() {
        let sum = this.sides.reduce((a, b) => a + b)
        return sum;
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides !== 3) {
            return false;
        }
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}

class Square extends Polygon {

    get isValid() {
        
        const [a, b, c, d] = this.sides;
            return a === b && c === d;
        }


    get area() {
        const [sideLength] = this.sides;
        return sideLength * sideLength
    }
};
