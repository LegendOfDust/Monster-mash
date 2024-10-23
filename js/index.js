console.log('working');
//create monster constructor with at least 4 properties
function cat (name, color, age, hairLength) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.hairLength = hairLength;
}
//create function to be called onclick
    generateCats = () => {
    //Create new instance of monster object
    const cat1 = new cat('Kiki', 'black', 3, 'short');
    const cat2 = new cat('Noodle', 'grey tabby', 1, 'medium');
    const cat3 = new cat('Smokey', 'grey', 4, 'short');
    //concatenate the new monster's properties into a string
    const catString1 = generateCatString(cat1);
    const catString2 = generateCatString(cat2);
    const catString3 = generateCatString(cat3);
    //grab empty p tag using id
    const CatElement1 = document.getElementById('cat-1');
    const CatElement2 = document.getElementById('cat-2');
    const CatElement3 = document.getElementById('cat-3');
    //update with the monster properties string
    CatElement1.textContent = catString1;
    CatElement2.textContent = catString2;
    CatElement3.textContent = catString3;
    //repeat for monster 2/3
    }

    generateCatString = (cat) => {
        const catString = `${cat.name} is a ${cat.age} year old ${cat.color} cat with ${cat.hairLength} hair length.`;
        return catString;
    }