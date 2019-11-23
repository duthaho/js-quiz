---
title: Reference Types
tags:
  - reference
  - types
order: 38
date: '2019-11-23'
answers:
  - '1'
  - 'An error is thrown'
  - 'undefined // correct'
  - 'Something different is logged'
---

Kết quả là gì?

```javascript
const a = { something: 1, someOtherThing: 2 };

const deleteSomething = input => {
  delete input.something;
  return input.something;
};

const result = deleteSomething(a);

console.log(result);
```

<!-- explanation -->

Khi chúng ta truyền tham số vào một function là một kiểu dữ liệu tham chiếu (`reference types`) thì những thay đổi đối với tham số bên trong hàm sẽ thay đổi đến chính object chúng ta truyền vào. Vì vậy khi xóa một thuộc tính của tham số `input` cũng chính là xóa luôn thuộc tính của object `a`.
