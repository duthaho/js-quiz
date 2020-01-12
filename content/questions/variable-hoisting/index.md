---
title: Variable Hoisting
tags:
  - hoisting
date: '2019-11-23'
answers:
  - '5 10'
  - 'undefined 10 // correct'
  - '5 undefined'
  - 'undefined undefined'
---

Kết quả là gì?

```javascript
var x = 5;

(function() {
  console.log(x);
  var x = 10;
  console.log(x);
})();
```

<!-- explanation -->

Biến `x` sẽ được `hoist` bên trong function, chúng ta có thể xem function được thực thi như sau:

```javascript
var x = 5;

(function() {
  var x;
  console.log(x);
  x = 10;
  console.log(x);
})();
```
