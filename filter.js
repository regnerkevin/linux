var data = require('./linux.js');
var LINUX = JSON.parse(data);
function filter(array, test) {
	var passed [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]);
			passed.push(array[i]);
	}

	return passed;

}

print(JSON.stringify(filter(LINUX, function(linux) {
	return linux.DatebyMS > 1000000000000;
})));
