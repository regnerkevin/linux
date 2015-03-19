var data = require('./linux.js');
var linux = JSON.parse(data);
function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}

	return passed;

}

print(JSON.stringify(filter(linux, function(getdate) {
	return getdate.DatebyMS > 1000000000000;
})));
