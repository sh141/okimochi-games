const okimochiList = ["お","き","も","ち"]
function okimochiSelect(){ 
    return okimochiList[Math.floor(Math.random() * okimochiList.length)] 
}

Vue.component("okimochi-button", {
    template: "<div>{{ character }}</div>",
    props: ["character"],
    methods: {

    }
})

const app = new Vue({
    el: "#app",
    data: {
        list: [
            {id: 0,  pushKey: "1", character: okimochiSelect()},
            {id: 1,  pushKey: "2", character: okimochiSelect()},
            {id: 2,  pushKey: "3", character: okimochiSelect()},
            {id: 3,  pushKey: "4", character: okimochiSelect()},
            {id: 4,  pushKey: "q", character: okimochiSelect()},
            {id: 5,  pushKey: "w", character: okimochiSelect()},
            {id: 6,  pushKey: "e", character: okimochiSelect()},
            {id: 7,  pushKey: "r", character: okimochiSelect()},
            {id: 8,  pushKey: "a", character: okimochiSelect()},
            {id: 9,  pushKey: "s", character: okimochiSelect()},
            {id: 10, pushKey: "d", character: okimochiSelect()},
            {id: 11, pushKey: "f", character: okimochiSelect()},
            {id: 12, pushKey: "z", character: okimochiSelect()},
            {id: 13, pushKey: "x", character: okimochiSelect()},
            {id: 14, pushKey: "c", character: okimochiSelect()},
            {id: 15, pushKey: "v", character: okimochiSelect()},
        ]
    },
    methods: {
        keyDown: function(event){
            this.list.forEach((element,index) => {
                if(element.pushKey == event.key){
                    this.$set(this.list, index, {id: index, pushKey: element.pushKey, character: okimochiSelect()})
                }
            })
        }
    },
    mounted() {
        window.addEventListener('keyup', event => {
            this.keyDown(event)
        })
    }
})