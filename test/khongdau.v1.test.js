const { expect } = require('chai');
const KhongDau = require('../lib/khongdau');

describe('Traditional khong dau v1', () => {
  it('Basic convert', async () => {
    const src = 'Hoàng Sa, Trường Sa là của Việt Nam';
    const dst = KhongDau.c(src);
    const dst1 = KhongDau.cLowerCase(src);
    const dst2 = KhongDau.cUpperCase(src);
    const dst3 = KhongDau.cFriendlyURI(src);

    expect(dst).to.be.equal('Hoang Sa, Truong Sa la cua Viet Nam');
    expect(dst1).to.be.equal('hoang sa, truong sa la cua viet nam');
    expect(dst2).to.be.equal('HOANG SA, TRUONG SA LA CUA VIET NAM');
    expect(dst3).to.be.equal('hoang-sa-truong-sa-la-cua-viet-nam');
  });

  it('Alphabet convert', async () => {
    const src = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZáàảãạăắằẳẵặâấầẩẫậAÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬđĐéèẻẽẹêếềểễệÉÈẺẼẸÊẾỀỂỄỆíìỉĩịÍÌỈĨỊóòỏõọôốồổỗộơớờởỡợÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢúùủũụưứừửữựÚÙỦŨỤƯỨỪỬỮỰýỳỷỹỵÝỲỶỸỴ';
    const rel = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAdDeeeeeeeeeeeEEEEEEEEEEEiiiiiIIIIIoooooooooooooooooOOOOOOOOOOOOOOOOOuuuuuuuuuuuUUUUUUUUUUUyyyyyYYYYY';
    const dst = KhongDau.c(src);
    const dst1 = KhongDau.cLowerCase(src);
    const dst2 = KhongDau.cUpperCase(src);

    expect(dst).to.be.equal(rel);
    expect(dst1).to.be.equal(rel.toLowerCase());
    expect(dst2).to.be.equal(rel.toUpperCase());
  });
});