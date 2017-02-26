var tvkd = require('./index.js');

var str = 'Hoàng Sa - Trường Sa là của Việt Nam';
var alphabet = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZáàảãạăắằẳẵặâấầẩẫậAÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ';

console.log('\n*** Bo dau ***\n');
console.log(tvkd.c(str));
console.log(tvkd.c(alphabet));

console.log('\n*** Bo dau, bo hoa ***\n');
console.log(tvkd.cLowerCase(str));
console.log(tvkd.cLowerCase(alphabet));

console.log('\n*** Bo dau, viet hoa ***\n');
console.log(tvkd.cUpperCase(str));
console.log(tvkd.cUpperCase(alphabet));

console.log('\n*** Than thien URI ***\n');
console.log(tvkd.cFriendlyURI(str));
console.log(tvkd.cFriendlyURI(alphabet));

console.log(tvkd.c({}));
