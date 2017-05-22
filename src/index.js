function observe(data) {
    return new Observer(data)
}
function Observer(val) {
    this.value = val
    this.walk(val)
}
Observer.prototype = {
    walk(obj) {
        for (let key of Object.keys(obj)) {
            this.observeProperty(obj, key, obj[key])
            if (typeof obj[key] === 'object') {
                this.walk(obj[key])
            }
        }
    },
    observeProperty(obj, key, val) {
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                return val
            },
            set: function (newVal) {
                if (val === newVal) {
                    return;
                }
                val = newVal
                console.log('数据已修改')
            }
        })
    },
    notify() {
        console.log('数据已修改')
    }
}

function compile(el, self) {
    let $el = document.querySelector(el) || document.body
    console.log($el)
}

function MVVM(option) {
    this.$option = option || {}
    this.data = observe(option.data).value
    compile(option.el, this)
}