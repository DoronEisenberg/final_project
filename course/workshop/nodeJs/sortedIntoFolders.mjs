/////איך להסתנכרן עם הכונן דיסק
import fs from "fs/promises";

let sortedFoldersPath = "./sorted";
fs.access(sortedFoldersPath);

try {
    await fs.access(sortedFoldersPath);
} catch {
    await fs.mkdir(sortedFoldersPath); ///אופציה/path.join(__dirname,
}

let fileNames = await fs.readdir("./photos");

for (let fileName of fileNames) {
    let chunks = fileName.split("__dirname");
    let date;
    for (let chunk of chunks) {
        if (chunk.length === 8) {
            date = chunk;
        }
    }
    let year = date.slice(0, 4);
    let month = date.slice(4, 6);
    console.log("year", year);
}

/*let animals = ["dog", "cat", "elephant"];

for (let animal of animals) {
    ////it's like -> (animals[0], animals[1],animals[2]), animals[3]...;
    ////we making new veraible called animal and showing the veraible "animals" results to console.log
    console.log(animal);
}
///for (let i = 0; i < fileNames.length; i++) {) */
