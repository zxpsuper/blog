domClass = (function() {
    // IE6-10 不支持
    // Safari5/Chrome8/Firefox3.6/Opera11.5 及以上版本支持
    var supportClassList = (function() {
        var div = document.createElement('div');
        div.className = 'a';
        return !!div.classList;
    })();

    var hasClass, addClass, removeClass, toggleClass, replaceClass;

    function check(el, cls) {
        if (el.nodeType !== 1 || typeof cls !== 'string') {
            return false;
        }
        return true;
    }

    if (supportClassList) {
        hasClass = function(el, cls) {
            if (check(el, cls)) return el.classList.contains(cls);
            else return false;
        };
        addClass = function(el, cls) {
            var i = 0,
                c;
            if (check(el, cls)) {
                cls = cls.split(' ');
                while ((c = cls[i++])) {
                    el.classList.add(c);
                }
            }
        };
        removeClass = function(el, cls) {
            var i = 0,
                c;
            if (check(el, cls)) {
                cls = cls.split(' ');
                while ((c = cls[i++])) {
                    el.classList.remove(c);
                }
            }
        };
        toggleClass = function(el, cls) {
            if (check(el, cls)) {
                el.classList.toggle(cls);
            }
        };
    } else {
        hasClass = function(el, cls) {
            if (check(el, cls))
                return (
                    (' ' + el.className + ' ').indexOf(' ' + cls + ' ') != -1
                );
            else return false;
        };
        addClass = function(el, cls) {
            if (check(el, cls) && !hasClass(el, cls)) {
                el.className += (el.className ? ' ' : '') + cls;
            }
        };

        removeClass = function(el, cls) {
            if (check(el, cls)) {
                el.className = el.className.replace(
                    RegExp('\\b' + cls + '\\b', 'g'),
                    ''
                );
            }
        };
        toggleClass = function(el, cls) {
            hasClass(el, cls) ? removeClass(el, cls) : addClass(el, cls);
        };
    }

    replaceClass = function(el, oldCls, newCls) {
        removeClass(el, oldCls);
        addClass(el, newCls);
    };

    return {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        replaceClass: replaceClass,
    };
})();
