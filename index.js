var fs = require('fs');

fs.readdir('./pliki', 'utf-8', function(err, data) {
    var i;

    for (i = 0; i < data.length; i++) {
        fs.appendFile('./text.txt', ('\n' + getData(data[i])), function(err) {
            if (err) throw err;
        });
    }
});

function getData(doc) {
    var text;

    fs.readFile(doc, 'utf-8', function(err, data) {
        text = data;
    });

    return text;
}
