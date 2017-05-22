export default function observe (data, key) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get function () {
            return val
        },
        set function (newVal) {
            val = newVal
            notify()
        }
    })
}
function notify () {
    
}