// import { describe, test, expect } from "vitest";
import { handleThousandNumber, formatWithMod } from "./index";

describe("数字千分位处理 - handleThousandNumber", () => {
  test("int test", () => {
    const result = handleThousandNumber(123456);
    expect(result).toBe("123,456");
  });
  test("float test", () => {
    const result = handleThousandNumber(123456.12399);
    expect(result).toBe("123,456.12399");
  });
});

describe("数字千分位处理 - formatWithMod", () => {
  test("int test", () => {
    const result = formatWithMod(123456);
    expect(result).toBe("123,456");
  });
  test("float test", () => {
    const result = formatWithMod(123456.12399);
    expect(result).toBe("123,456.12399");
  });
});

// formatWithMod(12365896) // '12,365,896'
// formatWithMod(12365896.123) // '12,365,896.123'
// formatWithMod(0.123) // '0.123'
// formatWithMod(-10111.123)  // '-10,111.123'
