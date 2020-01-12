---
title: Promise Race
tags:
  - promise
  - race
date: '2019-11-24'
answers:
  - 'Hello'
  - 'Goodbye'
  - 'Oops!'
  - 'Something went wrong... // correct'
---

Kết quả là gì?

```javascript
const p1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, 'Hello')
);

const p2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 120, 'Goodbye')
);

const p3 = new Promise((resolve, reject) =>
  setTimeout(reject, 10, 'Oops!')
);

Promise.race([p1, p2, p3])
  .then(result => console.log(result))
  .catch(reason => console.log('Something went wrong...'));
```

<!-- explanation -->

[Promise.race()](http://duthaho.com/blogs/js-promise) sẽ trả về kết quả của một Promise nào hoàn thành trước. Trong ví dụ trên, `p3` sẽ hoàn thành trước, nó sẽ gọi `reject` sau 10ms và sẽ rơi vào `catch`.
