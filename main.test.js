const {
    doughnutChaser
} = require("./main")
//Unfortunately I can't include random tests without showing the solution

describe('Fixed tests - Input Validation', () => {
    test("Given an invalid input, it should throw the specified error",()=>{
        expect(() => doughnutChaser(null,null)).toThrow("Invalid Input!")
        expect(() => doughnutChaser(NaN,5)).toThrow("Invalid Input!")
        expect(() => doughnutChaser(undefined,".")).toThrow("Invalid Input!")
        expect(() => doughnutChaser("5",true)).toThrow("Invalid Input!")
        expect(() => doughnutChaser(-5,2)).toThrow("Invalid Input!")
        expect(() => doughnutChaser(2.2,Math.PI)).toThrow("Invalid Input!")
    })
})

describe('Fixed tests - Small sized grids', () => {
    test("Given a valid input, return the number of unique paths",()=>{
        expect(doughnutChaser(1,1)).toBe(1);
        expect(doughnutChaser(0,1)).toBe(0);
        expect(doughnutChaser(0,0)).not.toBe(1);
        expect(doughnutChaser(2,2)).toBe(2);
        expect(doughnutChaser(3,3)).toBe(6);
        expect(doughnutChaser(3,8)).toBe(36);
        expect(doughnutChaser(2,9)).toBe(9);
        expect(doughnutChaser(3,5)).toBe(15);
    })
})
//Uncomment these one at a time only when you have optimised your soltuion
//or else it might freeze whilst calculating

// describe('Fixed tests - Increasing grid sizes', () => {
    // test("Given a grid of (23,4), return the number of unique paths",()=>{
    //     expect(doughnutChaser(23,4)).toBe(2300);
    // })
    // test("Given a grid of (5,55), return the number of unique paths",()=>{
    //     expect(doughnutChaser(5,55)).toBe(424270);
    // })
    // test("Given a grid of (14,22), return the number of unique paths",()=>{
    //     expect(doughnutChaser(14,22)).toBe(927983760);
    // })
    // test("Given a grid of (22,21, return the number of unique paths",()=>{
    //     expect(doughnutChaser(22,21)).toBe(269128937220);
    // })
    // test("Given a grid of (35,22), return the number of unique paths",()=>{
    //     expect(doughnutChaser(35,22)).toBe(841728816603675);
    // })
// })




