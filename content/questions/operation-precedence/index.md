---
title: Operation Precedence
tags:
  - operation precedence
date: '2019-11-23'
answers:
  - '44 4'
  - '8 5'
  - '7 5 // correct'
  - '43 5'
---

Kết quả là gì?

```javascript
let b = '4';

console.log(b++ + 3, b);
```

<!-- explanation -->

Toán tử `++` (Postfix Increment) được ưu tiên hơn toán tử `+`, đầu tiên toán tử Postfix Increment sẽ chuyển đổi `b` từ string `'4'` sang number `4`, sau đó nó sẽ chờ phép toán `4 + 3` thực hiện xong mới thực hiện tăng `b` lên một đơn vị.
