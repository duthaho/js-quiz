---
title: JSON
tags:
  - json
  - cloning
order: 41
date: '2019-11-24'
answers:
  - 'true true true true'
  - 'true true true false'
  - 'true true false true // correct'
  - 'false false false false'
---

Kết quả là gì?

```javascript
const a = {
  stringField: 'Joe',
  numberField: 123,
  dateField: new Date('1995-12-17T03:24:00'),
  nestedField: { field: 'Nested' }
};

const b = JSON.parse(JSON.stringify(a));

console.log(
  a.stringField === b.stringField,
  a.numberField === b.numberField,
  a.dateField === b.dateField,
  a.nestedField.field === b.nestedField.field
);
```

<!-- explanation -->

`b = JSON.parse(JSON.stringify(a))` sẽ thực hiện [deep copy](https://duthaho.com/blogs/js-cloning-array) trên object `a`. Tất cả các thuộc tính là các kiểu dữ liệu nguyên thủy (Boolean, String, Number) sẽ được copy một cách chính xác, tuy nhiên đối với các thuộc tính có giá trị không phải là giá trị JSON (Date, undefined, Function, và không phải kiểu dữ liệu nguyên thủy) sẽ không được copy đúng. Trong ví dụ trên, object Date sẽ được chuyển đổi sang string, chúng ta có thể xem thêm về [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description) để hiểu rõ hơn.
