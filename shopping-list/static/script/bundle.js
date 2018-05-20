(function () {
    'use strict';

    var featureDetection = {
        querySelector: function () {
            //Check support for querySelecotr
            if (document.querySelector) {
                return true;
            } else {
                return false;
            }
        },
        classList: function () {
            //Check support for classList
            var checkClassList = document.querySelector('body').classList;
            if (checkClassList) {
                console.log('browser support classlist');
                //Check support for classList.add() and classList.toggle()
                try {
                    checkClassList.add;
                    checkClassList.remove;
                    console.log('browser support classList.toggle and classList.add');
                    return true;

                } catch (err) {
                    console.log('browser does not support classList.add or classList.toggle');
                    return false;
                }

            } else {
                console.log('browser doesnt support classlist');
                return false;
            }
        },
        eventListener: function () {
            //Check support for addEventListner
            if (document.addEventListener) {
                return true;
            } else {
                console.log('browser does not support AddEventListner');
                return false;
            }
        },
        dragAndDrop: function () {
            //based on Modernizer.js
            //Check if we can drag an element
            if('draggable' in document.createElement('span')) {
                return true;            
            }else{
                console.log('does not support drag and drop');
                return false;
            }
        }
    };

    var dragAndDrop = {
        dragStart: function (ev) {
            //set data ready for transfer
            ev.dataTransfer.setData('text', ev.target.innerHTML);
            this.source = ev.target;
            ev.dropEffect = "move";
        },
        dragOver: function (ev) {
            //window dont allow item to be dropped on elements
            //this is to prevend the prevention from windows
            ev.preventDefault();
            ev.dataTransfer.dropEffect = "move";
            var element = ev.target;
            element.classList.add('dropable');
        },
        dragLeave: function (ev){
            var element = ev.target;
            element.classList.remove('dropable');
        },
        dropItem: function (ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");

            console.log(this.source.innerHTML);
            //Swap data 
            this.source.innerHTML = ev.target.innerHTML;
            console.log(this.source.innerHTML);
            console.log(ev.target.innerHTML);
            console.log(this.source.innerHTML);
            ev.target.innerHTML = data;
            

            //remove indicator that an item is dropable
            ev.target.classList.remove('dropable');
        },
        souce : {}
    };

    var app = {
        init: function () {
            //Check if the browser contain some of the feature we need to enhance it, else give the user the normal version
            if (this.featureDectection()) {
                this.dragAndDrop();
            } else {
                console.log('Not all feature are support');
            }
        },
        featureDectection : function (){
            //Check for the feature we need
            if (featureDetection.querySelector() && featureDetection.eventListener() && featureDetection.dragAndDrop()) {
                return true;
            } else {
                return false;
            }
        },
        dragAndDrop: function () {
            var items = document.querySelectorAll('main li');

            for(var i = 0; i < items.length; i++){
                items[i].addEventListener('dragstart', function (item) {
                    dragAndDrop.dragStart(item);
                });
                items[i].addEventListener('dragover', function (item) {
                    dragAndDrop.dragOver(item);
                });
                items[i].addEventListener('dragleave', function (item) {
                    dragAndDrop.dragLeave(item);
                });
                items[i].addEventListener('drop', function (item) {
                    dragAndDrop.dropItem(item);
                });
            }
        }
    };

    app.init();

}());
