---
title: This Context
tags:
  - this
  - context
date: '2019-11-22'
answers:
  - '20 62.83185307179586'
  - '20 NaN // correct'
  - '20 63'
  - 'NaN 63'
---

Kết quả là gì?

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

<!-- explanation -->

Trong ví dụ trên, `diameter` là một function shorthand bình thường, còn `perimeter` là arrow function.

Khi tìm hiểu về [this context](https://duthaho.com/blogs/js-this-context) trong JavaScript, với arrow function thì `this` được `auto binding` và nó chính là scope bên ngoài chính function đó. Điều đó có nghĩa là khi chúng ta gọi function `perimeter`, `this` bây giờ không phải là object `shape` mà là object global `window` (trong trình duyệt), window không có biến `radius` nên `this.radius` trả về `undefined`.
