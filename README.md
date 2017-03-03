# Tiếng Việt không dấu

_Node Module dành cho người Việt_

[![Tieng Viet khong dau](https://img.shields.io/badge/node-%5E0.10.40-brightgreen.svg)](//www.npmjs.com/package/khong-dau) [![Tieng Viet khong dau](https://img.shields.io/badge/npm-%5E1.4.28-brightgreen.svg)](//www.npmjs.com/package/khong-dau)

## Cài đặt

```shell
$ npm install --save khong-dau
```

## Sử dụng

### Đối với NodeJS

```javascript
var KhongDau = require('khong-dau');

console.log(KhongDau('Hoàng Sa, Trường Sa là của Việt Nam'));

// Kết quả: Hoang Sa, Truong Sa la cua Viet Nam
```

### Đối với Javascript phía Font-end

```html
<script src="lib/khongdau.js"></script>
```

```js
console.log(KhongDau('Hoàng Sa, Trường Sa là của Việt Nam'));
// Kết quả: Hoang Sa, Truong Sa la cua Viet Nam
```

## API

> Lưu ý: Bạn vẫn có thể sử dụng cú pháp của phiên bản trước **1.0.0**

**KhongDau(str [, rules])**

Trong đó `rules` là một mảng quy định cách chuyển đổi, gồm:

    + "chuyen" (Chuyển đổi từ Tiếng Việt sang Latin Alphabet)
    + "url" (Chuẩn hóa chuỗi để sử dụng cho các liên kết)
    + "file" (Chuẩn hóa chuỗi để sử dụng làm tên file)

Ví dụ:

```js

var str = 'Hoàng Sa - Trường Sa là của Việt Nam';

console.log('\n*** Bo dau ***\n');
console.log(KhongDau(str));
// Hoang Sa - Truong Sa la cua Viet Nam

console.log('\n*** URL sau khi Bo Dau***\n');
console.log(KhongDau(str, ["chuyen", "url"]));
// Hoang-Sa-Truong-Sa-la-cua-Viet-Nam

console.log('\n*** FILE sau khi Bo Dau ***\n');
console.log(KhongDau(str, ["chuyen", "file"]));
// Hoang Sa - Truong Sa la cua Viet Nam

```

## Demo

[Xem thêm ví dụ](./demo.js)

## Giấy phép

MIT
