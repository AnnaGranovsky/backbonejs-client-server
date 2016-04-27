var defaultData = require('./defaults'),
    lock = require('./libs/lock'),
    mongodb = require('mongodb');

console.log('server reset start...');
reset(defaultData);

function reset (defaultInfo) {
    var data = defaultInfo;

    // console.log('Please, wait...');

    // lock.reset(9).then(function () {
    //     console.log('All done! Exiting...');
    //     process.exit();
    // });
    
    resetTable('courses', data.courses);

}

function getConnection (name, callback) {
    var MongoClient = mongodb.MongoClient,
        url = 'mongodb://localhost:27017/courses';

    MongoClient.connect(url, function (err, db) {
        if (err !== null) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            var collection = db.collection(name);
            callback(collection, db);
        }
    });
}

function resetTable (nameCollection, defaultData) {
    getConnection(nameCollection, function (collection, db) {
        collection.remove({}, function (err, result) {
            collection.insert(defaultData, function (err, result) {
                    console.log('Succesfully inserted ' + nameCollection + ': ' + result);
                    db.close();
                    lock.check();
                }
            );
        });
    });
}
