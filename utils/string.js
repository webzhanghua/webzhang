// 对字符串进行操作
/**
 * 1
 * @method  trim    清除字符串左右空白字符
 * @param   {string}    [str]   待处理的字符串
 * @param   {string}    [type]  处理类型
 * @return  {string}  返回处理好的字符串
 */
function trim (str, type = 'all') {
    const regexp = {
        left: /(^\s*)/g,
        all: /(^\s*)|(\s$)/g,
        right: /(\s$)/g
    }
    return str.replace(regexp[type], '')
}
/**
 * 对String对象进行扩展，清除字符串左右空白字符
 */
function stringExtendTrim () {
    String.prototype.trim = function (type = 'all') {
        const regexp = {
            left: /(^\s*)/g,
            all: /(^\s*)|(\s$)/g,
            right: /(\s$)/g
        }
        return this.replace(regexp[type], '')
    }
}

/**
 * 2
 * 提取字符串中的a标签
 * @param   {string}    [str]   str
 * @readonly    {object}    [{source:'',url:'',text:''}]
 */
// var str='<p>需要到EHR员工自助\n\n<a href=\"http://www.baidu.com/hrss/login.jsp\">www.baidu.com</a>&nbsp; 个人信息中进行修改，修改完成后需要所在组织的HRBP审核后的一天时间（系统有一天的同步时间）才能生效。</p><p>建议使用IE浏览器登录，如果登录进去显示页面有问题，需要将登陆地址加入浏览器的兼容性视图；</p><p>如果登录还有问题，可以将需要修改的手机号码发送给您的HRBP在后台进行修改。</p><p><img class=\"big-pic\" src=\"http://www.baidu.com/qyic8c7o%2F19f22374-60d6-4f72-9ac4-1b31a62881ec_QQ%E6%88%AA%E5%9B%BE20180709083727.png\" title=\"QQ截图20180709083727.png\" alt=\"QQ截图20180709083727.png\"></p><a href=\"http://www.baic.com/hrss/login.jsp\">http://www.baic.com/hrss/login.jsp</a><p><br></p><p></p>'
function extractTagsA (str) {
    let regexpA = /\<a.*?\>(.+?)\<\/a\>/g
    let regexpUrl = /href\=\"(.+?)\"\>(.+?)\<\/a>/g
    let labelAs = str.match(regexpA) || []
    let newLabel = labelAs.map((item) => {
        let labelContent = regexpUrl.exec(item)
        regexpUrl.lastIndex = 0
        return {
            source: item,
            url: labelContent[1],
            text: labelContent[2]
        }
    })
    return newLabel
}

/**
 * 3
 * 将json字符串转化为对象
 * @param   {string}    [str]   json字符串
 */
function jsonToObject (str) {
    if (!str) {
        console.log('不是一个有效对json数据')
        return
    }
    return eval('(' + str + ')');
}

/**
 * 4
 * 将url参数转换为对象
 * @param {string}  [url]   url地址信息
 * @returns {object}
 */
function parseQueryString (url) {
    let reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
        arr_url = reg_url.exec(url),
        ret = [];

    if (arr_url && arr_url[1]) {
        var str_para = arr_url[1], result;
        while ((result = reg_para.exec(str_para)) != null) {
            ret.push({
                key: result[1],
                value: result[2]
            })
        }
    }
    return ret
};
