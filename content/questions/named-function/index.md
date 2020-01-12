---
title: Named Functions
tags:
  - named functions
date: '2020-01-12'
answers:
  - 'true, true'
  - 'false, false'
  - 'true, ReferenceError // correct'
  - 'false, ReferenceError'
---

Kết quả là gì?

```javascript
var foo = function bar() {
    console.log(foo === bar);
};
foo();
bar();
```

<!-- explanation -->

Chúng ta có thể khai báo `function expression` cùng với `named function` và dùng `named function` bên trong function đó để gọi tới chính nó. Nhưng chúng ta không thể dùng `named function` bên ngoài được, điều đó có nghĩa khi gọi `bar()` sẽ gây ra lỗi `ReferenceError`.
