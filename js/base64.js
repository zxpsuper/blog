var Base64 = {
    // private property
    _keyStr:
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

    // public method for encoding
    encode: function (input) {
        var output = '';
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            // 取前6位
            enc1 = chr1 >> 2;
            // 取chr1的后两位，在末尾补chr2的前四位
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            // 取chr2的后四位，在末尾补 chr3的前两位
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            // 取chr3的后六位
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output =
                output +
                this._keyStr.charAt(enc1) +
                this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) +
                this._keyStr.charAt(enc4);
        }

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = '';
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        // 去除非base64的字符
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            // 取enc1 + enc2的前2位组成 8 比特位即 1 字节
            chr1 = (enc1 << 2) | (enc2 >> 4);
            // 取enc2后 4 位 + enc3的前4位组成 8 比特位即 1 字节
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            // 取enc3前 2 位 + enc4 组成 8 比特位即 1 字节
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }

        output = Base64._utf8_decode(output);

        return output;
    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n); // 返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                //  8 - 11 位
                // 127 =>  1111111
                // 192 => 11000000
                // 128 => 10000000
                // 63  =>   111111
                // 这里是将二进制去除后六位，然后在开头加'11'补至八位二进制，变成一个小于255的数字
                utftext += String.fromCharCode((c >> 6) | 192);
                // 这里是取二进制后六位, 然后在开头加'1'补至八位二进制，变成一个小于255的数字
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                // 大于11位, 因为unicode最大位数为16
                // 224 =>  11100000
                // 这里是将二进制去除后12位，然后在开头加'111'补至八位二进制，变成一个小于255的数字
                utftext += String.fromCharCode((c >> 12) | 224);
                // 这里取 7 - 12 位，然后在开头加'1'补至八位二进制，变成一个小于255的数字
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                // 这里取 后 6 位，然后在开头加'1'补至八位二进制，变成一个小于255的数字
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = '';
        var i = 0;
        var c = (c1 = c2 = 0);

        while (i < utftext.length) {
            c = utftext.charCodeAt(i);

            if (c < 128) {
                // 1字符
                string += String.fromCharCode(c);
                i++;
            } else if (c > 191 && c < 224) {
                // 2字符
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                // 3字符
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(
                    ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
                );
                i += 3;
            }
        }

        return string;
    },
};

let r = Base64.encode('你好');
console.log(r);
console.log(Base64.decode(r))
// export default Base64;
