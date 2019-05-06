// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
    it('is as simple as `class XXX {}`', function() {
      //let TestClass;
       class TestClass{};
     // const instance = new TestClass();
      const instance = new TestClass();
      assert.equal(typeof instance, 'object');
    });
    
    
    it('a class is block scoped', () => {
      // class Inside {}
      // {class Inside {}} 
      
      //inside is an object class within another class
      {class Inside {}}
      //the object is a class with an inside object but object is undefined
      assert.equal(typeof Inside, 'undefined');
    });
    
    
    it('the `constructor` is a special method', function() {
      // class User {
      //   constructor(id) {}
      // }
      class User {
        constructor(id) {
          this.id = id;
        }
      }
      //const user = new User(42);
      const user = new User(42);
      assert.equal(user.id, 42);
    });
    //keyword 'this' allows you to get into the scope to reach the id
    
    
    it('defining a method by writing it inside the class body', function() {
      class User {
        writesTests() {
          return false;
        }
        
      }
      //const notATester = new User();
      const notATester = new User();
      assert.equal(notATester.writesTests(), false);
    });
    //writing a function to return false. this 'defines a method'
    
    
    it('multiple methods need no commas (opposed to object notation)', function() {
      // class User {
      //   wroteATest() { this.everWroteATest = true; }
      //   isLazy() {  }
      // }
      class User {
        wroteATest() { this.everWroteATest = true; }
        isLazy() { return !this.everWroteATest }
      }
      //const tester = new User();
      const tester = new User();
      assert.equal(tester.isLazy(), true);
      tester.wroteATest();
      assert.equal(tester.isLazy(), false);
    });
    //write a second function, no need for a comma between the two
    //needed to return false 
    
    
    it('anonymous class', () => {
      //const classType = typeof {};
      const classType = typeof class {};
      assert.equal(classType, 'function');
    });
  });
  