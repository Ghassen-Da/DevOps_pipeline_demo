const {helloWorld}=require('./index.js')
// hello world test
describe('hello world', function () {
    it('should return hello world', function () {
        expect(helloWorld()).toEqual('hello world');
    });
});