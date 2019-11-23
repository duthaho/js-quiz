---
title: Function Hoisting
tags:
  - hoisting
order: 32
date: '2019-11-23'
answers:
  - 'second first 1 3'
  - 'first second 3 2 // correct'
  - 'second first 3 3'
  - 'first second 3 3'
---

Kết quả là gì?

```javascript
bar();

var bar;

function bar() {
  console.log('first');
}

bar = function() {
  console.log('second');
};

bar();

foo();

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();
```

<!-- explanation -->

Cơ chế `hoisting` trong Javascript được áp đụng khi khai báo biến (`variable declaration`) và khai báo function (`function declaration`), trừ khi gán một function cho biến (`function expression`).

Function declaration sẽ có độ ưu tiên hơn variable declaration khi `hoisting`, vì thế function `bar` sau khi `hoisted` sẽ giống thế này:

```javascript
function bar() {
  console.log('first');
}

bar(); // 'first'

bar = function() {
  console.log('second');
};

bar(); // 'second'
```

Trong trường hợp chúng ta có các khai báo trùng lặp (`duplication declaration`) hoặc gặp một phép gán (`assignment`) thì giá trị sẽ của biến hay function sẽ được thay thế, Vì vậy function `foo` sẽ giống thế này:

```javascript
function foo() {
  console.log(1);
}

function foo() {
  console.log(3);
}

foo(); // 3

foo = function() {
  console.log(2);
};

foo(); // 2
```
