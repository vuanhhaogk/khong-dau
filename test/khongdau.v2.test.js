const { expect } = require('chai');
const KhongDau = require('../lib/khongdau');

describe('Traditional khong dau v2', () => {
  it('Basic convert', async () => {
    const src = 'Hoàng Sa, Trường Sa là của Việt Nam';
    const dst = KhongDau(src);
    const dst1 = KhongDau(src, ["chuyen", "url"]);
    const dst2 = KhongDau(src, ["chuyen", "file"]);

    expect(dst).to.be.equal('Hoang Sa, Truong Sa la cua Viet Nam');
    expect(dst1).to.be.equal('Hoang-Sa-Truong-Sa-la-cua-Viet-Nam');
    expect(dst2).to.be.equal('Hoang Sa, Truong Sa la cua Viet Nam');
  });

  it('Alphabet convert', async () => {
    const src = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZáàảãạăắằẳẵặâấầẩẫậAÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ';
    const rel = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAdDeeeeeeeeeeeEEEEEEEEEEEiiiiiIIIIIoooooooooooooooooOOOOOOOOOOOOOOOOOuuuuuuuuuuuUUUUUUUUUUUyyyyyYYYYY';
    const dst = KhongDau(src);
    const dst1 = KhongDau(src, ["chuyen", "url"]);
    const dst2 = KhongDau(src, ["chuyen", "file"]);

    expect(dst).to.be.equal(rel);
    expect(dst1).to.be.equal(rel);
    expect(dst2).to.be.equal(rel);
  });
});