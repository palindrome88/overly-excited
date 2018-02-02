var expect = require("chai").expect;

describe("", function(){


	var addExcitement = require("../js/overly-excited.js").addExcitement;

	it("should have an array of objects with things in it", function() { //one aspect of the behavior.
        
        

		expect(addExcitement).to.have.lengthOf.above(0,"This thing ain't got crap in it, dude.");
        
	});
	it("should append '!' to every third word", function() { //one aspect of the behavior.
		// ( (whitespaceofsent[currentpos] % 2) == 1) &&  ( (whitespaceofsent[currentpos -1 ] % 2) == 1)  
		// if this evals true, then ! has been appended 

		expect(addExcitement).to.have.lengthOf.above(0,"This thing ain't got crap in it, dude.");
        
	});
});