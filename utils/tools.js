
/**
 * 1
 * @method  onresizeFun    绑定视窗发生变化时，触发回调
 */
function onresizeFun () {
    window.onresize = () => {
        return (() => {
            // 回调事件
        })()
    }
}


/**
 * 2
 * @method  screenDislocation   ios手机键盘收起页面错位解决方法
 * @param   {string}    [system]    手机系统ios或android
 */
function screenDislocation (system) {
    window._isScreenReset = true
    if (system === 'ios') {
        document.body.addEventListener('focusin', () => {
            //软键盘弹出的事件处理
            setTimeout(() => {
                window._isScreenReset = false;
            }, 100);
        });
        document.body.addEventListener('focusout', () => {
            //软键盘收起的事件处理
            window._isScreenReset = true;
            setTimeout(() => {
                //当焦点在弹出层的输入框之间切换时先不归位
                if (window._isScreenReset) {
                    window.scroll(0, 0);//失焦后强制让页面归位
                }
            }, 100);
        });
    }
}


/**
 * 3
 * Created by zhanghuga on 2019/6/20
 * 获取手机信息，
 */
// 手机系统
export const getSystem = () => {
    var system = '',
        devices = '';
    var versions = (function () {
        var u = window.navigator.userAgent;
        return { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    })()
    if (versions.iPhone || versions.iPad || versions.ios) {
        system = 'ios';
        devices = (versions.iPhone && 'iPhone') || (versions.iPad && 'iPad') || (versions.ios && 'ios');
    }
    if (versions.android) {
        system = 'android';
        devices = 'android';
    }
    return {
        system: system,
        devices: devices
    }
}