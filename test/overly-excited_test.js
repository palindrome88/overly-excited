var expect = require("chai").expect;

describe("", function(){


	var addExcitement = require("../js/overly-excited.js").addExcitement;

	it("should have an array of objects with things in it", function() { //one aspect of the behavior.
        
        

		expect(addExcitement).to.have.lengthOf.above(0,"This thing ain't got crap in it, dude.");
	});
});