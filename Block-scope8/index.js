// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`const` is like `let` plus read-only', () => {
    describe('scalar values are read-only', () => {
      it('e.g. a number', () => {
      //   const constNum = 0;
      //   constNum = 1;
      //   assert.equal(constNum, 0);
      // });
      
      const constNum = 0;
        //constNum = 1;
        assert.equal(constNum, 0);
      });
      //got rid of constNum as you cannot change the number assigned to const
      
      it('or a string', () => {
        // const constString = 'I am a const';
        // constString = 'Cant change you?';
        
        const constString = 'I am a const';
        
        assert.equal(constString, 'I am a const');
      });
    });
    //removed cant change you line since you cant change const
    
    
    const notChangeable = 23;
    it('const scope leaks too', () => {
      assert.equal(notChangeable, 23);
    });
    //already worked?
    
    
    describe('complex types are NOT fully read-only', () => {
      it('array`s items can be changed', () => {
        /*const arr = [];
        arr[0] = 0;*/
        const arr = [];
        arr[0] = 42;
        assert.equal(arr[0], 42);
      });
      //changed arr[0] = 0 to arr[0] = 42 to get the appropriate read
      
      
      it('object`s can be modified', () => {
        // const obj = {x: 1};
        // obj.x = 2;
        const obj = {x: 1};
        obj.x = 3;
        assert.equal(obj.x, 3);
      });
    });
  });
  //changed obj.x=2 to obj.x=3
  