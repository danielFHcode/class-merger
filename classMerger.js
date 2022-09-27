/**
 * @param {class[]} classList A list of classes to be merged.
 * @returns {class} One merged class.
 */
 function mergeClasses(...classList){
    if (classList.length == 0) throw new Error("Can't merge class list of length 0");
    if (classList.length == 1) return classList[0];

    const currentClass = classList[0];
    classList.splice(0,1);
    const mergedClass = class extends mergeClasses(...classList){};

    // For referencing default class properties.
    const emptyClass = class{};

    // Copying instance variables.
    Object.getOwnPropertyNames(currentClass.prototype).forEach((name)=>{
        // If property is equal to default there is no need to re-set it and potentially override the parent class's property.
        if (emptyClass.prototype[name] == currentClass.prototype[name]) return;
        mergedClass.prototype[name] = currentClass.prototype[name];
    })
    
    // Copying static properties.
    Object.getOwnPropertyNames(currentClass).forEach((name)=>{
        if (emptyClass[name] == currentClass[name]) return;
        mergedClass[name] = currentClass[name];
    })

    return mergedClass;
}

if (typeof module != 'undefined') module.exports = {mergeClasses};