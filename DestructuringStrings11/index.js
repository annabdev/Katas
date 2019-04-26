// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      //let a, b, c = 'abc';
      let [a, b, c] = 'abc';
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    //added [] to create destructuring of the string
    
    
    it('missing characters are undefined', () => {
      //const [a, c] = 'ab';
      const [a,b, c] = 'ab';
      assert.equal(c, void 0);
    });
    //added b into the destructured variable to make c call to an undefined source
    
    it('unicode character work too', () => {
      //const [space, coffee] = 'a ☕';
      const [coffee] = '☕';
      assert.equal(coffee, '\u{2615}');
    });
  });
  //got rid of space and 'a' in order to just have coffee equal '\u{2615}'
  