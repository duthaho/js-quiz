---
title: Object String Keys
tags:
  - object
  - keys
date: '2019-11-22'
answers:
  - 'false true false true'
  - 'false true true true'
  - 'true true false true // correct'
  - 'true true true true'
---

Kết quả là gì?

```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

<!-- explanation -->

Tất cả các keys của một object đểu được tự động chuyển thành string (trừ `Symbol`). Vì thế `obj.hasOwnProperty('1')` cho kết quả `true`.

Nhưng điều đó không đúng với `Set`, set phân biệt giữa string và number nên `set.has('1')` sẽ trả về `false` còn `set.has(1)` trả về `true`.
