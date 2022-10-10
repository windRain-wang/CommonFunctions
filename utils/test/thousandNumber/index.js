/**
 * 数字千分位处理
 * @param {Number} value 处理的数字
 * @param {string} groupSeparator 分隔符
 * @returns String
 */
export function handleThousandNumber(value, groupSeparator = ",") {
    const val = String(value);
    const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
    if (!cells) {
        return val;
    }
    else {
        const negative = cells[1];
        let int = cells[2] || "0";
        const decimal = cells[3] || "";
        int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
        return negative + int + decimal;
    }
}
/**
 * 数字千分位处理
 * @param number { Number }
 * @returns String
 */
export function formatWithMod(number) {
    const negative = number < 0 ? "-" : "";
    let n = Math.abs(number);
    let r = "";
    let temp;
    let mod;
    do {
        // 求模的值， 用于获取高三位，这里可能有小数
        mod = n % 1000;
        // 值是不是大于1，是继续的条件
        n = n / 1000;
        // 高三位
        // ~~mod: 取整 (1234.25 => 1234)
        temp = ~~mod;
        // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
        // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
        // 2.拼接“,”
        r = (n >= 1 ? `${temp}`.padStart(3, "0") : temp) + (!!r ? "," + r : "");
    } while (n >= 1);
    const strNumber = number + "";
    let index = strNumber.indexOf(".");
    // 拼接小数部分
    if (index >= 0) {
        r += strNumber.substring(index);
    }
    return negative + r;
}
