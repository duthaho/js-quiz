---
title: Var And Let
tags:
  - var
  - let
order: 12
date: '2019-11-22'
answers:
  - 'duthaho undefined'
  - 'duthaho ReferenceError'
  - 'ReferenceError 69'
  - 'undefined ReferenceError // correct'
---

Kết quả là gì?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'duthaho';
  let age = 69;
}

sayHi();
```

<!-- explanation -->

Trong Javascript, khi một function được thực thi, sẽ trải qua hai giai đoạn. Giao đoạn đầu tiên là `creation phase`, ở giai đoạn này, các biến khai báo trong function được cấp phát bộ nhớ và gán các giá trị mặc định, giai đoạn thứ hai là `execute phase`, giai đoạn này sẽ chạy từng dòng code trong function đó.

Sự khác biệt khi chúng ta khai báo biến giữa `var` và `let` là với biến được khai báo với `var`, chúng sẽ được cấp phát bộ nhớ và gán giá trị mặc định là `undefined` ngay ở giai đoạn `creation phase`, vì thế, khi Javascript chạy dòng `console.log(name)` sẽ in ra giá trị `undefined`.

Cơ chế này gọi là `hoisting` trong Javascript. Còn đối với biến được khai báo với `let`, chúng cũng được `hoisting` nhưng có hơi khác một chút với `var`. Đó chính là trong giai đoạn `creation phase`, biến `let` cũng được cấp phát bộ nhớ nhưng không được gán giá trị mặc định, chúng ta không thể truy cập đến biến này trước khi chúng được gán một giá trị nào đó (điều này được gọi là `temporal dead zone`). Vì vậy, khi `console.log(age)` trước khi `age` được gán giá trị, sẽ văng ra lỗi `ReferenceError`.
