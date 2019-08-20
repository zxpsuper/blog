function currying(fn, ...args) {
    console.log(fn);

    console.log(fn.length);
    if (args.length >= fn.length) {
        return fn(...args);
    } else {
        return (...args2) => currying(fn, ...args, ...args2);
    }
}
function simpleURL(protocol, domain, path) {
    return protocol + '://' + domain + '/' + path;
}
let conardliSite = currying(simpleURL)('http', 'www.conardli.top');
let page1 = conardliSite('page1.html');
