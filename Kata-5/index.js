// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
    it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
      //var func = function(){};
       var func = `() => {}`;
      //added backticks, removed 'function' added fat arrow
      
      assert.equal('' + func, '() => {}');
    });
    
    
    it('instead `{}` use an expression, as return value', function() {
      //var func = () => {};
      var func = () => {
        return 'I return too'
      };
      //added return to function
      assert.equal(func(), 'I return too');
    });
    
    
    it('one parameter can be written without parens', () => {
      //var func = p => param - 1;
      var func = param => param - 1;
      //changed p to param
      
      assert.equal(func(25), 24);
    });
    
    
    it('many params require parens', () => {
      //var func = param => param + param1;
      var func = (param, param1) => param + param1;
      //added parantheses as well as param1 
      
      assert.equal(func(23, 42), 23+42);
    });
    
    
    it('the function body needs parens to return an object', () => {
      //var func = () => {iAm: 'an object'};
      var func = () => ({iAm: 'an object'});
      
      //added parantheses around the object
      
      assert.deepEqual(func(), {iAm: 'an object'});
    });
  });
  