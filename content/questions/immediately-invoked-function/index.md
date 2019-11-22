---
title: Immediately Invoked Function
tags:
  - IIFE
order: 20
date: '2019-11-22'
answers:
  - 'object'
  - 'number // correct'
  - 'function'
  - 'undefined'
---

Kết quả là gì?

```javascript
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

<!-- explanation -->

`immediately invoked function (IIFE)` là hàm được gọi ngay lập tức lúc khai báo, có cú pháp như trong ví dụ trên `(() => 0)()`. Ở đây hàm `sayHi` trả về một `IIFE` và nó được gọi ngay lập tức khi hàm `sayHi` được gọi, vì thế `sayHi()` sẽ trả về số `0` với type là `number`.
