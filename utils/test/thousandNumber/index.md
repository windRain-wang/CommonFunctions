# 处理千分位

## 正则

js

<<< @/test/thousandNumber/func/handleThousandNumber.js

```javascript
handleThousandNumber(123456.236); // '123,456.236'
handleThousandNumber(-123456.236); // '-123,456.236'
handleThousandNumber(-0.236); // '-0.236'
```

:::details typescript
<<< @/test/thousandNumber/func/handleThousandNumber.ts
:::

## mod 运算

<<< @/test/thousandNumber/func/formatWithMod.js
:::details typescript
<<< @/test/thousandNumber/func/formatWithMod.ts
:::

## 测试用例

<<< @/test/thousandNumber/index.test.ts
