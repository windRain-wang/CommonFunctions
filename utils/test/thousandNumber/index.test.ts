// import { describe, test, expect } from "vitest";
import * as funcs from "./index";

const funcClone: any = funcs;

for (const key in funcClone) {
  describe("数字千分位处理 - " + key, () => {
    test("整数", () => {
      const result = funcClone[key](123456);
      expect(result).toBe("123,456");
    });
    test("小数", () => {
      const result = funcClone[key](123456.12399);
      expect(result).toBe("123,456.12399");
    });
    test("negative float test", () => {
      const result = funcClone[key](-123456.12399);
      expect(result).toBe("-123,456.12399");
    });
    test("zero point test", () => {
      const result = funcClone[key](0.12399);
      expect(result).toBe("0.12399");
    });
    test("four digit point test", () => {
      const result = funcClone[key](1236);
      expect(result).toBe("1,236");
    });
  });
}
