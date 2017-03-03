var KhongDau = require('./index.js');

var str = 'Hoàng Sa - Trường Sa là của Việt Nam';
var alphabet = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZáàảãạăắằẳẵặâấầẩẫậAÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ';

console.log('\n*** Bo dau ***\n');
console.log(KhongDau(str));
console.log(KhongDau(alphabet));

console.log('\n*** URL sau khi Bo Dau***\n');
console.log(KhongDau(str, ["chuyen", "url"]));
console.log(KhongDau(alphabet, ["chuyen", "url"]));

console.log('\n*** FILE sau khi Bo Dau ***\n');
console.log(KhongDau(str, ["chuyen", "file"]));
console.log(KhongDau(alphabet, ["chuyen", "file"]));
