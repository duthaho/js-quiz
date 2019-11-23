---
title: Object Values
tags:
  - object
  - values
order: 35
date: '2019-11-23'
answers:
  - 'hello // correct'
  - 'eohll'
---

Kết quả là gì?

```javascript
const scrambled = {
  2: 'e',
  5: 'o',
  1: 'h',
  4: 'l',
  3: 'l'
};

const result = Object.values(scrambled).reduce(
  (agg, el) => agg + el,
  ''
);

console.log(result);
```

<!-- explanation -->

Nếu key trong object là number thì `Object.values` sẽ sắp xếp lại các value theo thứ tự, với key không phải number thì thứ tự vẫn được giữ nguyên.
