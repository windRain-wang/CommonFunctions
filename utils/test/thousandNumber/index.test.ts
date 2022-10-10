import formatWithMod from "./func/formatWithMod";
import handleThousandNumber from "./func/handleThousandNumber";

const funcs = [formatWithMod, handleThousandNumber];

for (const key in funcs) {
  describe("数字千分位处理 - " + key, () => {
    it("整数", () => {
      const result = funcs[key](123456);
      expect(result).toBe("123,456");
    });
    it("小数", () => {
      const result = funcs[key](123456.12399);
      expect(result).toBe("123,456.12399");
    });
    it("negative float test", () => {
      const result = funcs[key](-123456.12399);
      expect(result).toBe("-123,456.12399");
    });
    it("zero point test", () => {
      const result = funcs[key](0.12399);
      expect(result).toBe("0.12399");
    });
    it("four digit point test", () => {
      const result = funcs[key](1236);
      expect(result).toBe("1,236");
    });
  });
}
