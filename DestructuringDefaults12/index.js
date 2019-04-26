// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
    it('just assign a default value, like so `a=1`', () => {
      //const [a:1] = [];
      const [a] = [1];
      assert.equal(a, 1);
    });
    
    
    it('for a missing value', () => {
      //const [b=2] = [1,,3];
      const [a,b=2, c] = [1,,3];
      assert.equal(b, 2);
    });
    //added , in front of b to skip the first item in the array
    
    
    it('in an object', () => {
      //const [a, b=2] = {a: 1};
     const {a, b=2} = {a: 1};
      assert.equal(b, 2);
    });
    //changed [] to {} since we are destructuring an object, not an array
    
    
    it('if the value is undefined', () => {
      //const {a, b} = {a: 1, b: void 0};
      const {a, b=2} = {a: 1, b: void 0};
      assert.strictEqual(b, 2);
    });
    //added "=2" after the b on the left side to assign the value of 2 to b
    
    
    it('also a string works with defaults', () => {
      //const [b=2] = '1';
      const [a, b=2] = '1';
      assert.equal(a, '1');
      assert.equal(b, 2);
    });
  });
  //added a to left side to assign a to 1
  