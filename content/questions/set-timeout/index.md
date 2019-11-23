---
title: Set Timeout
tags:
  - setTimeout
order: 29
date: '2019-11-23'
answers:
  - '1, 2, 3, 4'
  - '4, 2, 1, 3'
  - '1, 4, 3, 2 // correct'
  - '4, 3, 2, 1'
---

Kết quả là gì?

```javascript
(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

<!-- explanation -->

Rõ ràng `1` và `4` sẽ được in ra đầu tiên vì `console.log()` mà không có delay.
`2` sẽ được in ra sau `3` vì `2` bị delay 1 giây còn `3` bị delay sau 0 giây. Có một điểm chú ý là vì sao `3` bị delay là `0 giây`, nhưng lại được in ra sau `4`? vì `callback` trong `setTimeout` sẽ được đẩy vào `event queue` và nó chỉ được gọi sau khi `call stack` rỗng. Nếu bạn chưa rõ các khái niệm này, đọc thêm về [JS concurrency model/event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).
