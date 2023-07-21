/**
 * The following exercises will help familiarize you with coding using
 * primitive types (i.e. string) as well as data structures (i.e. list and 
 * object) in JavaScript. 
 */
class Starter {
    /**
     * @param {string} prefix 
     * @param {string} string 
     * @returns Prefixed string.
     * @example AddPrefixToString('auto', 'mobile') // output: 'automobile'
     */
    AddPrefixToString(prefix, string) {
        // TODO: Implement
        return ''
        // END TODO
    }

    /**
     * @param {string} suffix 
     * @param {string} string 
     * @returns Suffixed string.
     * @example AddSuffixToString('less', 'harm') // output: 'harmless'
     */
    AddSuffixToString(suffix, string) {
        // TODO: Implement
        return ''
        // END TODO
    }

    /**
     * @param {string} character 
     * @param {string} string 
     * @returns Index representing the location of the first found character 
     * within a string. If character does not exist in string, then return -1.
     * @example FindIndexOfCharacterInString('a', 'harmless') // output: 1
     * @example FindIndexOfCharacterInString('x', 'harmless') // output: -1
     */
    FindIndexOfCharacterInString(character, string) {
        // TODO: Implement
        return 0
        // END TODO
    }

    /**
     * @param {number} item 
     * @param {number[]} array 
     * @returns Array containing added item.
     * @example AddItemToArray(5, [2, 3, 4]) // output: [2, 3, 4, 5]
     */
    AddItemToArray(item, array) {
        // TODO: Implement
        return array
        // END TODO
    }

    /**
     * @param {number} item 
     * @param {number[]} array 
     * @param {number} index 
     * @returns Array containing added item at index. If the index is greater
     * than the size of the array, add the item to the end of the array. If the
     * index is less than 0, add the item to the front of the array.
     * @example AddItemToArrayAtIndex(5, [2, 3, 4], 3) // output: [2, 3, 4, 5]
     * @example AddItemToArrayAtIndex(5, [2, 3, 4], 1) // output: [2, 5, 3, 4]
     * @example AddItemToArrayAtIndex(5, [2, 3, 4], -1) // output: [5, 2, 3, 4]
     */
    AddItemToArrayAtIndex(item, array, index) {
        // TODO: Implement
        return array
        // END TODO
    }

    /**
     * @param {number} index 
     * @param {number[]} array 
     * @returns The number that was removed from the specified index from the
     * array. If the index is greater than the length of the array, return -1.
     * If the index is less than 0, return -1. It is guaranteed that this
     * array will not containing negative numbers.
     * @example RemoveItemAtIndexFromArray(-1, [2, 3, 4]) // output: -1
     * @example RemoveItemAtIndexFromArray(0, [2, 3, 4]) // output: 2
     * @example RemoveItemAtIndexFromArray(10, [2, 3, 4]) // output: -1
     */
    RemoveItemAtIndexFromArray(index, array) {
        // TODO: Implement
        return 0
        // END TODO
    }

    /**
     * @param {string} item 
     * @param {string[]} array 
     * @returns The index of the item in the array, or -1 if not found.
     * @example FindIndexOfItemInArray('cat', ['dog', 'cat', 'bird']) // output: 1
     * @example FindIndexOfItemInArray('air', ['bird', 'plane', 'superman']) // output: 1
     */
    FindIndexOfItemInArray(item, array) {
        // TODO: Implement
        return 0
        // END TODO
    }
    
    /**
     * @param {string} key 
     * @param {string} value 
     * @param {{}} object 
     * @returns Object with key-value pair added.
     * @example AddItemToObject('name', 'Bob', { age: 90 }) // output: { age: 90, name: 'Bob' }
     */
    AddItemToObject(key, value, object) {
        // TODO: Implement
        return object
        // END TODO
    }

    /**
     * @param {string} key 
     * @param {} object 
     * @returns Object with key-value pair removed.
     * @example RemoveItemFromObject('name', { name: 'Bob', age: 90 }) // output: { age: 90 }
     * @example RemoveItemFromObject('phone', { name: 'Bob', age: 90 }) // output: { name: 'Bob', age: 90 }
     */
    RemoveItemFromObject(key, object) {
        // TODO: Implement
        return object
        // END TODO
    }
}

let starter = new Starter()

// TODO: Call method on "starter" object
let result = starter.RemoveItemFromObject('name', { name: 'Bob', age: 90 })
// END TODO

console.log(result)