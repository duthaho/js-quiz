---
title: Logical Operators
tags:
  - short-circuit
date: '2019-11-23'
answers:
  - 'You have 1 notification'
  - 'You have 1 notifications'
  - 'You have 1 notificationfalse // correct'
---

Kết quả là gì?

```javascript
const notifications = 1;

console.log(
  `You have ${notifications} notification${notifications !==
    1 && 's'}`
);
```

<!-- explanation -->

Toán tử `&&` sẽ dừng và trả về kết quả `false` nếu gặp bất kỳ điều kiện nào sai, vì thế `notifications !== 1 && 's'` sẽ trả về `false`. Nếu bạn muốn ví dụ trên chạy đúng như ý muốn, ta có thể dùng ternary operator: `notifications !== 1 ? 's' : ''`.
