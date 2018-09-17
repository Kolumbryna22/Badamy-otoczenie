var fs = require('fs');

fs.readdir('./pliki', 'utf-8', function(err, data) {
    var i;

    for (i = 0; i < data.length; i++) {
        getData(data[i], inputData);
    }
});

function inputData(text) {
    fs.appendFile('./text.txt', ('\n' + text), function(err) {
        if (err) throw err;
    });
};

function getData(doc, next) {
    fs.readFile('./pliki/' + doc, 'utf-8', function(err, data) {
        if (err) throw err;

        next(data);
    });
};
