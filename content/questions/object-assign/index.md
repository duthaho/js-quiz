---
title: Object Assign
tags:
  - object
  - assign
date: '2019-11-24'
answers:
  - 'Joe Nested aReturn'
  - 'Bob Changed bReturn'
  - 'Joe Changed aReturn // correct'
  - 'Bob Nested bReturn'
---

Kết quả là gì?

```javascript
const a = {
  stringField: 'Joe',
  nestedField: { field: 'Nested' },
  functionField: () => 'aReturn'
};

const b = Object.assign({}, a);

b.stringField = 'Bob';
b.nestedField.field = 'Changed';
b.functionField = () => 'bReturn';

console.log(
  a.stringField,
  a.nestedField.field,
  a.functionField()
);
```

<!-- explanation -->

`b = Object.assign({},a);` sẽ thực hiện một `shallow copy` trên object `a`, bất kỳ thuộc tính nào của `b` là object đều tham chiếu đến cùng thuộc tính trong `a`. Vì vậy khi chúng ta thay đổi nested field của `b`, thì nested field của `a` cũng thay đổi theo.
