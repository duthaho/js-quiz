---
title: Object Duplicate Keys
tags:
  - object
  - keys
order: 17
date: '2019-11-22'
answers:
  - '{a: "one", b: "two" }'
  - '{b: "two", a: "three" }'
  - '{a: "three", b: "two" } // correct'
  - 'SyntaxError'
---

Kết quả là gì?

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

<!-- explanation -->

Nếu bạn có một object với nhiều keys có cùng tên, thì chúng sẽ được đè lên nhau, giá trị chính là giá trị sau cùng nhưng thứ tự lại là thứ tự đầu tiên của key.
