---
title: This Context 2
tags:
  - this
  - context
date: '2020-02-11'
answers:
  - 'null'
  - 'undefined'
  - 'window object // correct'
---

Kết quả là gì?

```javascript
function a() {
  console.log(this);
}
a.call(null);
```

<!-- explanation -->

[this context](https://duthaho.com/blogs/js-this-context) trong JavaScript tùy theo ngữ cảnh lúc gọi hàm.

Chúng ta có thể thay đổi `this context` của hàm bằng cách dùng hàm `call`, với tham số đầu tiên trở thành `this` và các tham số tiếp theo là các params của hàm. Vì vậy, khi gọi `a.call(window)` thì `this` trong hàm `a` chính là `window`.

Lưu ý, khi chúng ta truyền tham số đầu tiên vào hàm `call` là `null` hay `undefined` thì JavaScript sẽ tự động truyền global object vào hàm được gọi chứ không truyền `null` hay `undefined`. Vì vậy, đoạn code trên sẽ in ra object `window` thay vì `null` nhé.
