---
title: Global window
tags:
  - global
  - window
date: '2020-02-11'
answers:
  - 'undefined // correct'
  - '1'
  - 'Reference Error'
---

Kết quả là gì?

```javascript
if (!("a" in window)) {
    var a = 1;
}

console.log(a);
```

<!-- explanation -->

Đoạn code này trông có vẻ đơn giản, nếu biến global `window` chưa có phần tử `a` thì định nghĩa biến `a`, gán cho nó bằng `1`. Bạn sẽ nghĩ kết quả là `1`, nhưng không, đáp án đúng là `undefined`, điều gì đang xảy ra? Cùng đi qua 3 điểm dưới đây sẽ rõ.

Đầu tiên, tất cả các biến global được lưu trữ trong global object là `window` (ở browser). Khi chúng ta khai báo `var a = 1` điều đó đồng nghĩa với việc khai báo `window.a = 1`, và chúng ta có thể kiểm tra 1 biến có phải là global hay nằm trong object window hay không bằng cách `"variable-name in window"`. Vậy sau khi khai báo `var a = 1` thì `"a" in window` cho kết quả `true`.

Thứ hai, JavaScript có cơ chế `hoisted`, tất cả các khai báo biến đều được đưa lên đầu của scope của nó. Ví dụ:
```js
console.log("a" in window);
var a;
```

Tuy biến `a` được khai báo dưới dòng `console` nhưng kết quả in ra là `true`, vì JavaScript engine sẽ lần lượt tìm tất cả các khai báo biến và chuyển chúng lên đầu của scope. Vì thế đoạn code được thực thi có thể viết lại như sau:

```js
var a;
alert("a" in window);
```

Thứ ba là chỉ các khai báo biến mới được `hoisted`, còn các khởi tạo, gán giá trị cho biến thì không. Ví dụ:
```js
var a = 1;
```

thì chúng ta có 2 quá trình:
```js
var a;    //declaration
a = 1;    //initialization
```

Tóm lại, với sự hiểu biết của 3 khái niệm trên thì đoạn code ban đầu được thực thi như sau:
```js
var a;
if (!("a" in window)) {
    a = 1;
}
console.log(a);
```
và tất nhiên, kết quả là `undefined`.
