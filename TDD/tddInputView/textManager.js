//텍스트 벨류 - get set
class TextManager {
    constructor() {
        this.value = { data: "hello lions!" }
    }

    getValue() {
        return this.value.data
    }

    setValue(newValue) {
        this.value = newValue
    }
}