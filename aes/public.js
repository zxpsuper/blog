var CryptoJS = require('aes.js'); //引用AES源码js
var key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF'); //十六位十六进制数作为秘钥
var iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为秘钥偏移量
//解密方法
function Decrypt(word) {
    var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString().toUpperCase();
}

/**
 * 加密
 * word：原密码
 * key ：key
 * iv  ： iv
 */
function Encrypt_base64(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    var hexStr = encrypted.ciphertext.toString().toUpperCase();
    var oldHexStr = CryptoJS.enc.Hex.parse(hexStr);
    var base64Str = CryptoJS.enc.Base64.stringify(oldHexStr);
    return base64Str;
}

function Decrypt_base64(word) {
    //如果加密返回的base64Str
    var srcs = word;
    //若上面加密返回的hexStr,需打开下面两行注释，再次处理
    //var encryptedHexStr = fun_aes.CryptoJS.enc.Hex.parse(word);
    // var srcs = fun_aes.CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    var value = decryptedStr.toString();
    return value;
}
//暴露接口
module.exports.Decrypt = Decrypt;
module.exports.Decrypt_base64 = Decrypt_base64;
module.exports.Encrypt = Encrypt;
module.exports.Encrypt_base64 = Encrypt_base64;
