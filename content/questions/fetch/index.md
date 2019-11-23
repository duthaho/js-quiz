---
title: Fetch
tags:
  - fetch
order: 25
date: '2019-11-23'
answers:
  - 'The fetch function'
  - 'A reference error'
  - 'It depends // correct'
---

Kết quả là gì?

```javascript
console.log(fetch);
```

<!-- explanation -->

Tùy vào environment bạn chạy đoạn code trên mà kết quả sẽ khác nhau. Nếu chạy trên [trình duyệt đã hổ trợ fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility) thì kết quả là `the fetch function`, còn nếu chạy trên các trình duyệt cũ như `IE` hoặc trên môi trường `node`, chúng ta sẽ thấy lỗi `ReferenceError`.
