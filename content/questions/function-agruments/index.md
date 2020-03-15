---
title: Function Agruments
tags:
  - agruments
date: '2020-02-11'
answers:
  - '1'
  - '2'
  - '3'
  - '10 // correct'
---

Kết quả là gì?

```javascript
function b(x, y, a) {
  arguments[2] = 10;
  console.log(a);
}
b(1, 2, 3);
```

<!-- explanation -->

`arguments` là một object đặc biệt trong function của JavaScript, nó chứa các params của function và share chung bộ nhớ với chúng, vì thế khi thay đổi giá trị của `agruments` thì các params cũng được thay đổi theo.
