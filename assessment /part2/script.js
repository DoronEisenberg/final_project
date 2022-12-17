/*
Write your code for this exercise in this file beneath this long comment.
Please be certain to use only syntax and techniques covered in the
assigned freeCodeCamp courses. Additionally, please do not post any
part of this exercise or your solution to any online forums or social networks.

1. Write a function named createCandyBar that expects to receive three
arguments: name, maker, and caloriesPerPackage. This function should return an
object. The object it returns should have properties that are also named name,
maker, and caloriesPerPackage. The values assigned to these properties should
be the values that are passed to the function. Additionally, the object that
createCandyBar returns should have two methods:

    hasMoreCaloriesThan - a function that accepts one candy bar object as an
        argument and returns true if the candy bar object the function belongs
        to has more calories than the candy bar object that is passed as an
        argument and false if it does not.

    logCandyBar - a function that logs to the console a sentence that contains
        the values of the candy bar object's name and maker properties: "[name]
        is made by [maker]." For example, if the candy bar were Twix, then the
        sentence that logCandyBar logs would be "Twix is made by Mars."

2. Create a variable named candyBars and assign to it an array. This array
should contain six objects that are created by calling the createCandyBar
function. The values you should pass to the createCandyBar function to create
these objects are:

    name                       | maker    | caloriesPerPackage
    ----------------------------------------------------------
    Kit Kat                    | Nestlé   | 239
                               |          |
    Milka                      | Mondelēz | 530
                               |          |
    Reese's Peanut Butter Cups | Hershey  | 232
                               |          |
    Ritter Sport Milk          | Ritter   | 553
                               |          |
    Toblerone                  | Mondelēz | 529
                               |          |
    Twix                       | Mars     | 291

3. Write the following three functions. All three should use the candyBars
array to determine what to return.

    getCandyBarByName - this function expects a string as an argument and
        returns the object in the candyBars array whose name property is equal
        to the string that is passed to it (if there is one).

    getCandyBarsByMaker - this function expects a string as an argument and
        returns an array containing the objects in the candyBars array whose
        maker properties are equal to the string that is passed to it. If there
        are no matches, the array it returns should be empty.

    getAverageCalories - this function returns the average of all the
        caloriesPerPackage properties of all the objects in the candyBars array.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

var kitKat = getCandyBarByName('Kit Kat');
var milka = getCandyBarByName('Milka');

milka.hasMoreCaloriesThan(kitKat);

kitKat.logCandyBar();

getCandyBarsByMaker('Mondelēz');

getAverageCalories();
*/


function createCandyBar (name, maker, caloriesPerPackage) {
    return {
        name: name,
        maker: maker,
        caloriesPerPackage: caloriesPerPackage,
        hasMoreCaloriesThan: function (candyBar) {
            return caloriesPerPackage > candyBar.caloriesPerPackage

        },
        logCandyBar: function () {
            console.log(name + " is made by " + maker + ".")
        }
    }
}

const candyBar = [
    createCandyBar("Kit Kat", "Nestlé", 239), 
    createCandyBar("Milka", "Mondelēz", 530), 
    createCandyBar("Reese's Peanut Butter Cups", "Hershey", 232), 
    createCandyBar("Ritter Sport Milk", "Ritter", 553),         
    createCandyBar("Tobleronea", "Mondelēz", 529),                   
    createCandyBar("Twix", "Mars", 291),                        
] 

function getCandyBarByName (nameToFind) {
    for (let i = 0; i < candyBar.length ;i++) {
        if (nameToFind === candyBar[i].name) {
            return candyBar[i]
        }
    }
}

function getCandyBarByMaker (makerToFind) {
    const results = []

    for (let i = 0; i < candyBar.length ;i++) {
        if (makerToFind === candyBar[i].maker) {
            results.push(candyBar[i])
        }
    }

    return results
}


const caloriesPerPackage = [
        
    { caloriesPerPackage: 239 }, 
   
    { caloriesPerPackage: 530 },
    
    { caloriesPerPackage: 232 },
    
    { caloriesPerPackage: 553 },
    
    { caloriesPerPackage: 529 },
   
    { caloriesPerPackage: 291 },
]
const findAverage = (arr) => {
   const { length } = arr;
   return arr.reduce((acc, val) => {
      return acc + (val.caloriesPerPackage/length);
   }, 0);
};
console.log(findAverage(caloriesPerPackage));

