---
title: Array Constructor
tags:
  - array
  - constructor
order: 8
date: '2019-11-21'
answers:
  - '5'
  - '4'
  - '1'
  - '0 // correct'
---

Kết quả là gì?

```javascript
let i = 0;

const arr = new Array(5);
arr.forEach(() => i++);

console.log(i);
```

<!-- explanation -->

Bạn nghĩ là `5` à, không, bạn nên xem lại cách hoạt động của [Array constructor](http://duthaho.com/blogs/js-creating-array), khi truyền vào một tham số là number từ 0 đến (2^32 - 1), nó sẽ tạo ra một array chỉ có thuộc tính `length` là number vừa truyền vào chứ nó không chứa các phần tử nào (empty slots), array này còn được gọi là `sparse array`. Vì array không chứa phần tử nào nên hàm `forEach` sẽ không được duyệt qua bất kỳ lần nào, vậy kết quả là `0`.
