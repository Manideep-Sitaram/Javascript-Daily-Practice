// is_array() is used to check following is array or not.

arr1 = [1,2,3,[4,5]]
arr2 = [...arr1]
arr1[0] = 4
console.table([arr1,arr2])