const {helloWorld}=require('./index.js')

describe('hello world', function () {
    it('should return hello world', function () {
        expect(helloWorld()).toEqual('hello world');
    });
});