---
title: A Set of Objects
tags:
  - set
  - object
  - spread
order: 1
date: '2019-11-20'
answers:
  - '[{a: 1}, {a: 1}] // correct'
  - '[{a: 1}]'
---

Tạo mới một `Set` từ mảng các object và spread thành một array. Kết quả là gì?

```javascript
const mySet = new Set([{ a: 1 }, { a: 1 }]);
const result = [...mySet];
console.log(result);
```

<!-- explanation -->

`Set` được dùng để lưu trữ dữ liệu mà các phần tử trong `Set` là duy nhất (unique) và không trùng lặp. Tuy nhiên, nên chú ý với các trường hợp dữ liệu là kiểu dữ liệu tham chiếu, ở đây hai object `{ a: 1 } và { a: 1 }` có cùng thuộc tính và giá trị nhưng chúng là hai object hoàn toàn khác nhau và được lưu trong hai ô nhớ khác nhau. Đó cũng là lý do mà `{ a: 1 } === { a: 1 }` cho kết quả `false`.

Trong trường hợp `Set` được tạo như sau: `obj = { a: 1 }`, `new Set([ obj, obj ])`, khi đó `Set` chỉ chứa một phần tử, vì hai object lúc này cùng tham chiếu đến một ô nhớ mà thôi.
