// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
    const x = 1;
    const y = 2;
    describe('with variables', () => {
      it('the short version for `{x: x}` is {x}', () => {
        //const short = {x};
        const short = {y};
        assert.deepEqual(short, {y: y});
      });
      //changed {x} to {y}
      
      it('works with multiple variables too', () => {
        //const short = {x, y: z};
        const short = {x, y};
        assert.deepEqual(short, {x: x, y: y});
      });
    });
    //removed y: z from function
    
    describe('with methods', () => {
      const func = () => func;
      it('using the name only uses it as key', () => {
        //const short = {it};
        const short = {func};
        assert.deepEqual(short, {func: func});
      });
      //changed {it} to {func}
      
      
      it('a different key must be given explicitly, just like before ES6', () => {
        //const short = {func};
        const short = {otherKey: func};
        assert.deepEqual(short, {otherKey: func});
      });
      //added otherKey: to function
      
      it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
        const short = {
          inlineFunc() {
            return 'I am inline'
        }};
        assert.deepEqual(short.inlineFunc(), 'I am inline');
      });
    });
  });
  //turn inlineFunc into a function that called a return 
  