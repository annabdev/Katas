// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
    it('by surrounding the left-hand variable with `{}`', () => {
      //const x = {x: 1};
      const {x} = {x: 1};
      assert.equal(x, 1);
    });
    //added {} to x in order to destructure it
    
    
    describe('nested', () => {
      it('multiple objects', () => {
        // const magic = {first: 23, second: 42};
        // const {magic: [second]} = {magic};
        const magic = {first: 23, second: 42};
        const {magic: {second}} = {magic};
        assert.equal(second, 42);
      });
      //replaced [] with {} because we are destructuring an object
      
      
      it('object and array', () => {
        //const {z:[x]} = {z: [23, 42]};
        const {z:[,x]} = {z: [23, 42]};
        assert.equal(x, 42);
      });
      //added leading comma in order to call the second item in the array
      
      
      it('array and object', () => {
        //const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
        const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
        assert.equal(lang, 'ES6');
      });
    });
    //added another set of [] in order to get into the nested array
    
    describe('interesting', () => {
      it('missing refs become undefined', () => {
        //const {z} = {x: 1, z: 2};
        const {z} = {x: 1, y: 2};
        assert.equal(z, void 0);
      });
      //changed z: 2 to y: 2, unlike destructuring arrays, with objects you still have to call defined things
      
      
      it('destructure from builtins (string)', () => {
        //const {substr} = 1;
        const {substr} = '1';
        assert.equal(substr, String.prototype.substr);
      });
    });
  });
  //turned int into a string