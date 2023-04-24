import { subs, sum, mult } from "./Numbers";

describe("Numbers", () => {
    test("sum() should add two numbers", () => {
        expect(sum(1, 2)).toEqual(3);
    })
    test("Subs() should subtracts two numbers", () => {
        expect(subs(4, 2)).toEqual(2);
    })
    test("mult() should multiply two numbers", () => {
        expect(mult(4, 4)).toEqual(16);
    })
})