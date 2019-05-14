// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class`s constructor `super()` can be used', () => {
    it('`extend` a class and use `super()` to call the parent constructor', () => {
      class A {constructor() { this.levels = 1; }}
      // class B {
      //   constructor() {
          
      //     this.levels++;
      class B extends A {
        constructor() {
          super();
          this.levels++;
        }
      }
      assert.equal(new B().levels, 2);
    });
    //extended A with class B and added a super inside the constructor
    
    
    it('`super()` may also take params', () => {
      class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
      class B extends A {
        constructor(...args) { 
          //super();
          super(...args);
          this.counter++; 
        }
      }
      assert.equal(new B(42, 2).counter, 45);
    });
    //added ...args as a param in the super call
    
    
    it('it is important where you place your `super()` call!', () => {
      class A {inc() { this.countUp = 1; }}
      class B extends A {
        inc() {
          // super.inc();
          // this.countUp = 2;
          this.countUp = 2;
          super.inc();
          //You need to call the countUp before the Super or else the return will be 2
          
          return this.countUp;
        }
      }
      assert.equal(new B().inc(), 1);
    });
    
    
    it('use `super.constructor` to find out if there is a parent constructor', () => {
      class ParentClassA {constructor() {"parent"}}
      class B extends ParentClassA {
        constructor() {
          super();
          //this.isTop = '' + super.konstructer;
          this.isTop = 'ParentClassA' + super.constructer;
        //added 'ParentClassA' and changed the k to a c on constructer
          
        }
      }
      assert(new B().isTop.includes('ParentClassA'), new B().isTop);
    });
  });
  