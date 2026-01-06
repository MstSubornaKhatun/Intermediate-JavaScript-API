class Vehicle{
    constructor(name, price){
       this.name = name;
       this.price = price; 
    }
    move(){
        console.log("ami colacol korte pari")
    }
}



// Vehicle er beisitto Bus er modhe cole asbe, extra kichu property thakbe jegulo shudhu Bus er mothei thakbe jemn seat
class Bus extends Vehicle{
    constructor(name, price, seat){
        super(name, price)
        this.seat = seat;
    }
    route(){
        console.log("dhaka to cox")
    }
}

const greenLine = new Bus("greenLine", "12", 50);
// console.log(greenLine);
// greenLine.move()


// aaro kichu create korte paro


class Truck extends Vehicle{
    constructor(name, price, load) {
        super(name, price);
        this.load=load
    };

}


