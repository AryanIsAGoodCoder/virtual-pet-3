/*

Name = Aryan Awasthi
Date = 3/12/2020

real time data base vars and values.

1) Food = 0 
2) LastFed = 0;
3) gameState = ""

*/



//Create variables here
var database,foodStock;
var dog,dogImage,dogImage1,dog1;
var food;//value 20
var feedPet,addFoods;
var fedTime,lastFed;
var foodObject;
var score = 0;
var bedroom,garden,washroom;
var gameState;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png"); 
  bedroom = loadImage("images/Bed Room.png");
  washroom = loadImage("images/Wash Room.png");
  garden = loadImage("images/Garden.png");
   
}

function setup()
{
  database=firebase.database();
  console.log(database);

  createCanvas(800, 700);

  dog = createSprite(650,350,20,20);
  dog.addImage("hello",dogImage);
  dog.scale = 0.3;

  foodObject = new Food();
  

  feedPet = createButton("Feed The Dog");
  feedPet.position(700,95);
  feedPet.mousePressed(feedFood);

  addFoods= createButton("Add Food");
  addFoods.position(800,95);
  addFoods.mousePressed(addFood);
  
  foodStock=database.ref('Food'); // == food in database which is 20.
  foodStock.on("value",readStock); // updating value wheneever it is changed in foodStock  by observing and tellng readStock to update.

  feedPet=database.ref('addFood'); // == food in database which is 20.
  feedPet.on("value",readStock); // updating value wheneever it is changed in foodStock  by observing and tellng readStock to update.\
 
  }

  


function draw() 
{  
  background(46, 139, 87);

  foodObject.display();

 

  textSize(20);
  fill(0);
  text (" Food Added : " + food,50,65);
  

  
 

  drawSprites();
  //add styles here




}
function readStock(data)
{
  //the value from the database.
    food=data.val();
    console.log(food);

   foodObject.updateFoodStock(food);
    
}

function addFood() 
{
  food++;
  database.ref('/').update({
  Food : food,});
}

function feedFood() 
{
  

  foodObject.updateFoodStock(foodObject.getFoodStock()-1);
  database.ref('/').update({
  FeedTime:hour(),
  gameState:"Hungry",
  Food : foodObject,});
}




