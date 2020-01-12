---
title: Labeling
tags:
  - label
date: '2020-01-12'
answers:
  - 'ReferenceError'
  - 'TypeError'
  - 'NaN // correct'
  - '4'
  - '5'
---

Kết quả là gì?

```javascript
var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};

console.log(foo.baz + foo.bar + bar);
```

<!-- explanation -->

Trong JavaScript cũng có [`labled statement`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) nên đoạn code trên không có lỗi gì đâu nhé. Phần tử  `baz` và `bar` không có trong object `foo` nên ta có thể viết lại như sau `undefined + undefined + 1` và cho kết quả là `NaN`.
