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
        },
        dragOver: function (ev) {
            //window dont allow item to be dropped on elements
            //this is to prevend the prevention from windows
            ev.preventDefault();
        },
        dropItem: function (ev) {
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text");
            //Swap data 
            this.source.innerHTML = ev.target.innerHTML;
            ev.target.innerHTML = data;
        }
    };

    (function () {
        var app = {
            init: function () {
                //Check if the browser contain some of the feature we need to enhance it, else give the user the normal version
                if (this.featureDectection()) {
                    this.dragAndDrop();
                } else {
                    console.log('Not all feature are support');
                }
            },
            featureDectection() {
                //Check for the feature we need
                if (featureDetection.querySelector() && featureDetection.eventListener() && featureDetection.dragAndDrop()) {
                    return true;
                } else {
                    return false;
                }
            },
            dragAndDrop: function () {
                var items = document.querySelectorAll('main li');
                items.forEach(function (i) {
                    i.addEventListener('dragstart', (item) => {
                        dragAndDrop.dragStart(item);
                    });
                    i.addEventListener('dragover', (item) => {
                        dragAndDrop.dragOver(item);
                    });
                    i.addEventListener('drop', (item) => {
                        dragAndDrop.dropItem(item);
                    });
                });
            }
        };
        
        app.init();
    })();

}());
