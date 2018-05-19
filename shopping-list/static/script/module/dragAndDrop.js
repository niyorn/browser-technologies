var dragAndDrop = {
    dragStart: function (ev) {
        //set data ready for transfer
        ev.dataTransfer.setData('text', ev.target.innerHTML)
        this.source = ev.target;
    },
    dragOver: function (ev) {
        //window dont allow item to be dropped on elements
        //this is to prevend the prevention from windows
        ev.preventDefault()
    },
    dropItem: function (ev) {
        ev.preventDefault()
        let data = ev.dataTransfer.getData("text")
        //Swap data 
        this.source.innerHTML = ev.target.innerHTML
        ev.target.innerHTML = data;
    }
}

export {dragAndDrop}