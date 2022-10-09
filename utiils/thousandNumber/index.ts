export function handleThousandNumber(
  value: number,
  groupSeparator = ","
): string {
  const val = String(value);
  const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);
  console.log(1112);
  if (!cells) {
    return val;
  } else {
    const negative = cells[1];
    let int = cells[2] || "0";
    const decimal = cells[3] || "";
    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
    return negative + int + decimal;
  }
}
