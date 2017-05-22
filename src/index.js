import _init from './init'
import _observe from './observe'

function MVVM (option) {
    this.$option = option || {}
    this.data = option.data

    Object.keys(this.data).forEach(key => {
       _observe(this.data, key) 
    })
    _init(option.el, this)
}
