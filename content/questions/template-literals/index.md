---
title: Template Literals
tags:
  - truthy
  - template literals
order: 37
date: '2019-11-23'
answers:
  - 'Soon we must all choose between what is right and what is easy // correct'
  - 'Soon we must all choose between what is right and what is difficult'
  - 'Soon we must all choose between what is wrong and what is easy'
  - 'Soon we must all choose between what is wrong and what is difficult'
---

Kết quả là gì?

```javascript
const output = `Soon we must all choose between what is ${
  [] ? 'right' : 'wrong'
} and what is ${(() => false)() ? 'difficult' : 'easy'}`;

console.log(output);
```

<!-- explanation -->

Trong Javascript, mảng rỗng `[]` và function là `truthy`. Nhưng chú ý ở ví dụ trên, function này được thực thi và nó trả về `false`.
