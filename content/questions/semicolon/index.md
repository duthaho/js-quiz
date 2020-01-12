---
title: Semicolon
tags:
  - semicolon
date: '2019-11-23'
answers:
  - '{ foo: "foo" } undefined // correct'
  - 'undefined { bar: "bar" }'
  - 'undefined undefined'
---

Kết quả là gì?

```javascript
const foo = () => {
  return {
    foo: 'foo'
  }
}

const bar = () => {
  return
  {
    bar: 'bar'
  }
}

console.log(foo(), bar());
```

<!-- explanation -->

Mặc dù trông có vẻ hai function trong ví dụ trên hoàn toàn giống nhau. Nhưng JavaScript có một số quy tắc để tự động thêm vào dấu `;` (semicolon) sau một số câu lệnh, mà cụ thể ở đây là câu lệnh `return`.

Ở function `foo`, câu lệnh `return` và dấu `{` mở đầu một code block nằm trên cùng một dòng, vì vậy JavaScript chỉ thêm các dấu `;` vào sau các dấu `}` đóng code block:

```javascript
const foo = () => {
  return {
    foo: 'foo'
  };
};
```

Tuy nhiên, với function `bar()` lại là một câu chuyện khác, câu lệnh `return` nằm riêng lẽ trên một dòng, vậy nên JavaScript sẽ tự động thêm dấu `;` vào sau câu lệnh `return` này:

```javascript
const bar = () => {
  return;
  {
    bar: 'bar';
  }
};
```

Nó làm cho function `bar` giờ có thể viết như thế này:

```javascript
const bar = () => {
  return;
};
```
