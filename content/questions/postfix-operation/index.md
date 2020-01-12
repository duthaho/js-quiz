---
title: Postfix Operation
tags:
  - postfix operation
date: '2020-01-12'
answers:
  - '0'
  - '2'
  - '11'
  - 'TypeError // correct'
---

Kết quả là gì?

```javascript
console.log('1' -- '1');
```

<!-- explanation -->

Postfix Operator `--` chỉ thực hiện với biến, trong trường hợp này `'1'` không phải là biến nên sẽ gây ra lỗi `TypeError`. Nếu đoạn code trên được viết thành `'1' - - '1'` (chú ý có space giữa 2 dấu `-`) thì sẽ cho kết quả là `2`.
