var tvkd = {
	c: function(str){
		if (typeof str != 'string') //if not string or is null
			throw "Argument must be string";

		str = str.replace(/(á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ)/g, 'a');
		str = str.replace(/(A|À|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ)/g, 'A');
		str = str.replace(/đ/g, 'd');
		str = str.replace(/Đ/g, 'D');
		str = str.replace(/(é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)/g, 'e');
		str = str.replace(/(É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ)/g, 'E');
		str = str.replace(/(í|ì|ỉ|ĩ|ị)/g, 'i');
		str = str.replace(/(Í|Ì|Ỉ|Ĩ|Ị)/g, 'I');
		str = str.replace(/(ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)/g, 'o');
		str = str.replace(/(Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ)/g, 'O');
		str = str.replace(/(ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)/g, 'u');
		str = str.replace(/(Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự)/g, 'U');
		str = str.replace(/(ý|ỳ|ỷ|ỹ|ỵ)/g, 'y');
		str = str.replace(/(Ý|Ỳ|Ỷ|Ỹ|Ỵ)/g, 'Y');

		return str;
	},
	cLowerCase: function(str){
		return this.c(str).toLowerCase();
	},
	cUpperCase: function(str){
		return this.c(str).toUpperCase();
	},
	cFriendlyURI: function(str){
		str = this.cLowerCase(str);

		str = str.replace(/[^a-zA-Z0-9_-]/g, '-');

		while (str.length > 0 && (/--/g).test(str)){
			str = str.replace(/--/g, '-');
		}

		str = str.toLowerCase();

		return str;
	}
}

// Export if using node
try {module.exports = tvkd; } catch(e){};
