---
title: Promise All
tags:
  - promise
  - all
date: '2019-11-24'
answers:
  - '["first", "second"] // correct'
  - 'It is random'
---

Kết quả là gì

```javascript
const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([
  timer('first'),
  timer('second')
]).then(data => console.log(data));
```

<!-- explanation -->

[Promise.all](http://duthaho.com/blogs/js-promise) không quan tâm đến thứ tự thời gian hoàn thành xong các Promise, nó sẽ chờ cho tất cả các Promise hoàn thành xong và kết quả của nó sẽ là một array với thứ tự giữ nguyên với thứ tự của tham số truyền vào.
