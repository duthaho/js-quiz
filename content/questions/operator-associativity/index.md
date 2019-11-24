---
title: Operator Associativity
tags:
  - operator
  - associativity
order: 45
date: '2019-11-24'
answers:
  - true true
  - true false // correct
  - false false
  - undefined undefined
---

Kết quả là gì?

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

<!-- explanation -->

Các toán tử `<` và `>` có cùng độ ưu tiên và sẽ được thực hiện từ trái qua phải.

Dòng đầu tiên chúng ta có thể viết lại như sau `(1 < 2) < 3`, `1 < 2` được thực hiện trước và trả về  `true`, sau đó thực hiện `true < 3`, khi so sánh với number, boolean sẽ được chuyển đổi sang number, `true` trở thành `1`, vậy `true < 3` cho kết quả `true`.

Ở dòng thứ hai `(3 > 2) > 1`, `(3 > 2)` cũng được thực hiện trước và trả về `true`, tuy nhiên sau đó `true > 1` sẽ được chuyển đổi thành `1 > 1` và cho kết quả `false`.
