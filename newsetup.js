const fs = require('fs');
var myArgs = process.argv.slice(2);
if (myArgs.length > 0) {
    // read file and make object
    let content = JSON.parse(fs.readFileSync('config/settings.json', 'utf8'));
    // edit or add property
    content.databaseConnectionString = `mongodb://127.0.0.1:27017/astorez_${myArgs[0].toLowerCase()}`;
    content.baseUrl = `http://${myArgs[0].toLowerCase()}.astorez.net`;
    //write file
    fs.writeFileSync('config/settings.json', JSON.stringify(content, null, 4));
}