/**
 * 1
 * 数据对比，两个数据是否相等
 * @param   {*} [item1] 对比数据一
 * @param   {*} [item2] 对比数据二
 * @param   {*} [flag] 是否进行字符串对比
 * @returns {boolean}   是否相同
 */
function dataComparison (item1, item2, flag) {
    let isEqual = false
    if (typeof item1 === typeof item2) {
        if ((item1 === item2)
            || (flag
                && item1
                && item1.toString() === item2.toString())) {
            isEqual = true
        }
        // } else {
        //     if (flag && item1 == item2) {
        //         isEqual = true
        //     }
    }
    return isEqual
}
/**
 * 2
 * 对象对比，两个对象是否相等
 * @param   {*} [item1] 对比数据一
 * @param   {*} [item2] 对比数据二
 * @param   {*} [flag] 是否进行字符串对比
 * @returns {array}}   返回一个整理完的数组
 */
function objectComparison (obj1, obj2, flag) {
    console.log(obj1, obj2)
    if (!obj1
        || !obj2
        || !obj1 instanceof Object
        || !obj2 instanceof Object) {
        console.log('obj1或obj2不是对象类型')
        return
    }
    let key1s = Object.keys(obj1)
    let key2s = Object.keys(obj2)
    let keys = [...new Set(key1s.concat(key2s))]
    let common = []
    let diff = []
    keys.forEach((item) => {
        let isEqual = dataComparison(obj1[item], obj2[item], flag)
        let content = {
            key: item,
            value1: obj1[item],
            value2: obj2[item],
            isEqual: isEqual,
        }
        if (isEqual) {
            common.push(content)
        } else {
            diff.push(content)
        }
    })
    return common.concat(diff)
}
