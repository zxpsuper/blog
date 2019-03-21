// myPromise
function PromiseS(executor) {
    //executor是一个执行器（函数）
    let _this = this; // 先缓存this以免后面指针混乱
    _this.status = 'pending'; // 默认状态为等待态
    _this.value = undefined; // 成功时要传递给成功回调的数据，默认undefined
    _this.reason = undefined; // 失败时要传递给失败回调的原因，默认undefined
    function resolve(value) {
        // 内置一个resolve方法，接收成功状态数据
        // 上面说了，只有pending可以转为其他状态，所以这里要判断一下
        if (_this.status === 'pending') {
            _this.status = 'resolved'; // 当调用resolve时要将状态改为成功态
            _this.value = value; // 保存成功时传进来的数据
        }
    }
    function reject(reason) {
        // 内置一个reject方法，失败状态时接收原因
        if (_this.status === 'pending') {
            // 和resolve同理
            _this.status = 'rejected'; // 转为失败态
            _this.reason = reason; // 保存失败原因
        }
    }
    executor(resolve, reject); // 执行执行器函数，并将两个方法传入
}
// then方法接收两个参数，分别是成功和失败的回调，这里我们命名为onFulfilled和onRjected
PromiseS.prototype.then = function(onFulfilled, onRjected) {
    let _this = this; // 依然缓存this
    if (_this.status === 'resolved') {
        // 判断当前Promise的状态
        onFulfilled(_this.value); // 如果是成功态，当然是要执行用户传递的成功回调，并把数据传进去
    }
    if (_this.status === 'rejected') {
        // 同理
        onRjected(_this.reason);
    }
};
// module.exports = PromiseS; // 导出模块，否则别的文件没法使用
new PromiseS((res, rej) => {
    setTimeout(() => {
        console.log(2222);
        res(2);
    }, 2000);
}).then(txt => {
    console.log(111);
});
