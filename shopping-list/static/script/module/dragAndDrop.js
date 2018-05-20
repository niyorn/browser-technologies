var dragAndDrop = {
    dragStart: function (ev) {
        //set data ready for transfer
        ev.dataTransfer.setData('text', ev.target.innerHTML)
        this.source = ev.target;
        ev.dropEffect = "move";
    },
    dragOver: function (ev) {
        //window dont allow item to be dropped on elements
        //this is to prevend the prevention from windows
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
        var element = ev.target;
        element.classList.add('dropable');
    },
    dragLeave: function (ev){
        var element = ev.target;
        element.classList.remove('dropable');
    },
    dropItem: function (ev) {
        ev.preventDefault()
        var data = ev.dataTransfer.getData("text");
        //Swap data 
        this.source.innerHTML = ev.target.innerHTML;
        ev.target.innerHTML = data;
        
        //remove indicator that an item is dropable
        ev.target.classList.remove('dropable');
    },
    souce : {}
}

export {dragAndDrop}