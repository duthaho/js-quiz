---
title: Null - Undefined - NaN
tags:
  - null
  - undefined
  - NaN
order: 33
date: '2019-11-23'
answers:
  - 'true true true true'
  - 'true false true true'
  - 'true true false true // correct'
  - 'true true false false'
  - 'false false false false'
---

Kết quả là gì?

```javascript
const compare = a => a === a;

console.log(compare(null));
console.log(compare(undefined));
console.log(compare(NaN));
console.log(compare([NaN]));
```

<!-- explanation -->

Trong Javascript, khi sử dụng Triple Equals (`===`) thì `null` và `undefined` chỉ cho kết quả `true` khi so sánh với chính nó, `NaN` thì luôn cho kết quả `false` khi so sánh với bất kỳ object nào, kể cả chính nó, còn `[NaN]` là một array bình thường chỉ chứa một phần tử là `NaN`.
