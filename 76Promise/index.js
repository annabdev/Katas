it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
    const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
    const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
    const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
    promise
      .then(() => done(new NotRejectedError()))
      .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
      .catch(done);
  });
describe('`Promise.resolve()` returns a resolving promise', function() {
  it('if no value given, it resolves with `undefined`', function(done) {
    const promise = Promise.resolve;
    promise
      .then(value => { assert.deepEqual(value, void 0); done(); })
      .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
  });
  it('resolves with the given value', function(done) {
    const promise = Promise.resolve();
    promise
      .then(value => { assert.equal(value, 'quick resolve'); done(); })
      .catch(e => done(e));
  });
});
describe('`Promise.reject()` returns a rejecting promise', function() {
  it('if no value given, it rejects with `undefined`', function(done) {
    const promise = Promise.resolve();
    promise
      .then(() => done(new NotRejectedError()))
      .catch(value => { assert.deepEqual(value, void 0); done(); })
      .catch(done);
  });
  it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
    const promise = Promise;
    promise
      .then(() => done(new NotRejectedError()))
      .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
      .catch(done);
  });
});


class NotRejectedError extends Error {
constructor() {
  super();
  this.message = 'Expected promise to be rejected.';
}
}
