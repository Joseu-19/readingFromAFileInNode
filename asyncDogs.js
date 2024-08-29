const fs = require('fs');
const path = require ('path');

fs.readFile(path.join(__dirname, 'dogs.json'), 'utf-8', (err, data) =>{
    if(err){
        console.log(err);
    }
    else{
        let dogs = JSON.parse(data);
        console.log(dogs);
        dogs.forEach(dog=>{
            console.log(dog.name);
        });
    }
});