const { succeed, fail, repair, get } = require('./enhancer');
// test away!

describe('enhancer.js', () => {

    describe('repair()', () => {
        it('restores durability to 100', () => {

            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 127 }).durability).toBe(100);
            expect(repair({ durability: 72 }).durability).toBe(100);
        })
    })

    describe('success()', () => {
        it('increments one if level is not 20', () => {

            expect(succeed({ enhancement: 7 }).enhancement).toBe(8);
        })
    })

    describe('fail()', () => {
        it('when enhancement less than 15 decreases durability by 5, when enhancement is 15 or more durability decrease by 10, when enhancement is greater than 16, enhancement decrements by one', () => {

            expect(fail({ enhancement: 13, durability: 82 }).durability).toBe(77)
            expect(fail({ enhancement: 17, durability: 88 }).durability).toBe(78)
            expect(fail({ enhancement: 17, durability: 88 }).enhancement).toBe(16)
        })
    })
    
    it.todo('should have a max of 100 for durability')
})
