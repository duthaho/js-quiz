---
title: Closure - Hoisting
tags:
  - closure
  - hoisting
order: 22
date: '2019-11-23'
answers:
  - 'undefined Error 42'
  - '24 Error 24'
  - '24 24 42 // correct'
  - 'undefined Error 24'
  - '24 Error 42'
---

Kết quả là gì?

```javascript
function withVar() {
  const b = () => a;
  var a = 24;
  return b;
}

function withLet() {
  const b = () => a;
  let a = 24;
  return b;
}

function changingValue() {
  let a = 24;
  const b = () => a;
  a = 42;
  return b;
}

console.log(withVar()()); // ??
console.log(withLet()()); // ??
console.log(changingValue()()); // ??
```

<!-- explanation -->

`Closure` là khi một inner function có thể ghi nhớ và truy cập đến các thành phần ở scope của outer function, thậm chí outer function đã thực thi xong. Ở trong ba ví dụ trên, thì function `b` vẫn ghi nhớ và truy cập đến biến `a` ở bên ngoài scope của nó, mặc dù các outer function đã được thực thi xong.
