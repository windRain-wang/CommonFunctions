// import { describe, test, expect } from "vitest";
import { handleThousandNumber } from "./index";

describe("数字千分位处理", () => {
  test("int test", () => {
    const result = handleThousandNumber(123456);
    expect(result).toBe("123,456");
  });
  test("float test", () => {
    const result = handleThousandNumber(123456.12399);
    expect(result).toBe("123,456.12399");
  });
});
