


describe("a library for DOM manipulation", function() {
    var $;
    var element;

    beforeEach(function() {
        $ = new jdLibrary
    });

    it("knows when a selector is a class", function() {
        expect($.isClass('.Class')).toEqual(true);
    });
    it("knows when a selector is an id", function() {
        expect($.isId('#Id')).toEqual(true);
    });
    it("knows when a selector is a tag", function() {
        expect($.isTag('Tag')).toEqual(true);
    });
    it("returns elements by Tag Name", function() {
        element = $.getByTag('img')[0]
        expect(element.outerHTML).toEqual("<img id=\"some_other_id\" class=\"some_class some_other_class\">")
    })
    it("returns elements by class name", function() {
        element = $.getByClass('#unique')[0]
        expect(element.outerHTML).toEqual("<div class=\"unique\"></div>") 
    })
    it("returns elements by id", function() {
        element = $.getById('#some_id')[0]
        expect(element.outerHTML).toEqual("<div id=\"some_id\" class=\"some_class some_other_class\"></div>") 
    })

});