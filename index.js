var fs = require("fs");

function endsWith(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var readDirectory = function(directory, output) {
	fs.readdirSync(directory).forEach(function(file) {
		var fullPath = directory + "/" + file;
		var stats = fs.statSync(fullPath);

		if(stats.isDirectory()) {
			output[file] = {};

			return readDirectory(fullPath, output[file]);
		}

		if(endsWith(file, "Test.js")) {
			output[file.replace("Test.js", "")] = require(fullPath);
		}
	});
}

module.exports = function(directory) {
    var suite = {};

    readDirectory(directory, suite);
    
    return suite;
};
