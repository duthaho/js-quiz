---
title: Number With Dots
tags:
  - numbers
  - dots
date: '2019-11-23'
answers:
  - '[1, 2, 3, 4, 5]'
  - 'undefined // correct'
  - 'Syntax error'
---

What is the return of the following `console.log`?

```javascript
const n = 5;

console.log(1..n); // ?
```

<!-- explanation -->

Khi muốn truy cập đến một thuộc tính hay method của một object ta có thể dùng dot notation (một dấu `.`), còn đối với number, ta có thể dùng hai dấu `.`, vì khi dùng một dấu `.` thì JavaScript sẽ bị nhầm lẫn với decimal number. Trong trường hợp này, `1..n` sẽ truy cập đến thuộc tính `n` của number `1`, nó trả về `undefined`. Một ví dụ cụ thể là khi gọi `1..toString()` sẽ cho kết quả là `"1"`.
