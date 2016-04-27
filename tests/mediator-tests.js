QUnit.module('Mediator tests');

QUnit.test('test 1 - add a channel on subsribe', function (assert) {
    var mediator = new Mediator();

    mediator.subscribe('test-1');

    assert.ok(mediator.channels['test-1'], 'Should add channel "test-1" to the mediator object');
});

QUnit.test('test 2 - add callback on subscribe', function (assert) {
    var mediator = new Mediator(),
    	channel,
    	out;

    function testCallback () {
    	return;
    }
	
	mediator.subscribe('test-2', testCallback);
	channel = mediator.channels['test-2'][0];
	out = channel.callback.name;

	assert.equal(out, 'testCallback', 'Should add callback "testCallback" to channel "test-2" to the mediator object');
});

QUnit.test('test 3 - call callback function on publish', function (assert) {
    var mediator = new Mediator(),
    	out;

    function setOut (value) {
    	out = value;
    }
    
    mediator.subscribe('test-3', setOut);
    mediator.publish('test-3', 10);

    assert.equal(out, 10, 'Should call the callback function to set the variable to value 10');
});
