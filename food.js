class Food{
    constructor(){
        var milk = loadImage("milk.png");
        this.lastFed = null;
        this.foodStock = null;
        this.initialize = null;
    }
    getFoodStock(){
        getFoodStock = database.ref("Food");
        getFoodStock.on('value',function(data){
            this.foodStock = data.val().Food;
            this.lastFed = data.val().FeedTime;
        })
    }
    updateFoodStock(quantity){
        database.ref('/').update({
            Food : quantity,
            Food:foodObj.getFoodStock(),
            FeedTime:hour
        })        
    }
   display(){
        
   }
}