import { toUpperCase } from "../app/Utils";

describe("This is utils tests", () => {
  test("should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert:
    expect(actual).toBe(expected);
  });
});
