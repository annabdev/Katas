// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Template string, can contain multiline content', function() {
    it('wrap it in backticks (`) and add a newline, to span across two lines', function() {
      // var normalString = `line1 //// line3`;
      var normalString = `line1\n\nline3`;
      
      // wrote in \n which creates a new line, did this twice to get from line 1 to line 3
  
      assert.equal(normalString, 'line1\n\nline3');
    });
    it('even over more than two lines', function() {
      // var multiline = ``;
      var multiline = `\n\n\n`;
      
      //same as before just added one "\n"
          
        
      assert.equal(multiline.split('\n').length, 4);
    });
    describe('and expressions inside work too', function() {
      var x = 42;
      it('like simple variables', function() {
        // var multiline = `line 1 $ {x}`;
        var multiline = `line 1\n\n      ${x}`;
        
        //just had to add a bunch of extra spaces
  
        assert.equal(multiline, 'line 1\n\n      42');
      });
      it('also here spaces matter', function() {
        // var multiline = ``;
        var multiline = `\n\n${x}`;
        
        //added two new lines and a function calling x
  
        assert.equal(multiline, '\n\n42');
      });
    });
  });

  // So long and thanks for all the fish
  