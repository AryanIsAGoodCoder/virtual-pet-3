class Food 
{
    constructor() 
    {
        this.image = loadImage("images/Milk.png");
        this.foodStock = 20;
        this.lastFeed;
    }
    getFoodStock() 
    {
        return this.foodStock;
        
    }
    updateFoodStock(food)
    {
        this.foodStock = food;
    }
    deductFood()
    {
        if(this.foodStock > 0) {
            this.foodStock -=1;
        }
    }
    graden() 
    {
        background(garden,550,500);
    }
    washroom() 
    {
        background(garden,550,500);
    }
    bedroom() 
    {
        background(garden,550,500);
    }
    display()
    {
        var x=80;
        var y=300;

        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock!=0) 
        {
            for(var i=0;i<this.foodStock;i++) 
            {
                if(i%10 ===0) 
                {
                    x = 80;
                    y = y+50;
                }
                console.log(this.foodStock);
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
    }
}