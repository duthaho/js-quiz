---
title: Object Keys
tags:
  - object
  - object.keys
  - object.values
order: 42
date: '2019-11-24'
answers:
  - '[1, 2, 3] ["1", "2", "3"]'
  - '["1", "2", "3"] [1, 2, 3] // correct'
  - '["1", "2", "3"] ["1", "2", "3"]'
---

Kết quả là gì?

```javascript
const obj = {
  1: 1,
  2: 2,
  3: 3
};

console.log(Object.keys(obj), Object.values(obj));
```

<!-- explanation -->

`Object.keys` sẽ chuyển đổi keys của object sang string `['1', '2', '3']` và `Object.values` sẽ giữ nguyên values của object `[1, 2, 3]`.
