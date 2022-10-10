/**
 * 数字千分位处理
 * @param {Number} value 处理的数字
 * @param {string} groupSeparator 分隔符
 * @returns String
 */
export default function handleThousandNumber(value, groupSeparator = ",") {
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
