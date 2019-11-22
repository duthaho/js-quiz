---
title: Object String Keys 2
tags:
  - object
  - keys
order: 18
date: '2019-11-22'
answers:
  - '123'
  - '456 // correct'
  - 'undefined'
  - 'ReferenceError'
---

Kết quả là gì?

```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

<!-- explanation -->

Tất cả các keys của một object đểu được tự động chuyển thành string (trừ `Symbol`).

Khi một object chuyển sang string, nó có giá trị `"[object Object]"`, vậy `a[b] = 123` có thể viết thành `a["object Object"] = 123`, tương tự với `a[c] = 456` sẽ là `a["object Object"] = 456`.
