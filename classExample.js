class Circle{
	static shape = "Circle";
	// static {
	// 	this.shape = "Circle";
	// }
//static Method
	static circumference(radius){
		return 2 * Math.PI * radius;
	}
	constructor(radius, ...generatorInput) {
		this.radius = radius;
	}
//Getter
	get area(){
		return this.calArea();
	}
//Method
	calArea(){
		return Math.PI * this.radius *this.radius;
	}
}


const circle = new Circle(5);
console.log(circle.shape); // undefined
console.log(Circle.shape); // Circle
console.log(circle.circumference); // undefined
console.log(Circle.circumference(5)); //31.41592653589793
console.log(circle.area); // 78.53981633974483
console.log("calArea()",circle.calArea())
const circle1 = new Circle(10, ...[1,2,3]);
console.log(circle1.shape); // undefined
console.log(Circle.shape); // Circle
console.log(circle1.area); //314.1592653589793

// tradational way before ES6
function Animal(type, color){
	this.type = type;
	this.color = color
}