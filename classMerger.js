/**
 * @param {class[]} classList A list of classes to be merged.
 * @returns {class} One merged class.
 */
 function mergeClasses(...classList){
    if (classList.length == 1) return classList[0];

    const currentClass = classList[0];
    classList.splice(0,1);
    const mergedClass = class extends mergeClasses(...classList){};

    Object.getOwnPropertyNames(currentClass.prototype).forEach((name)=>{
        mergedClass.prototype[name] = currentClass.prototype[name];
    })

    return mergedClass;
}

if (typeof module != 'undefined') module.exports = {mergeClasses};