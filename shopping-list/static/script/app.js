import {featureDetection as feature} from './module/featureDectection.js';
import {dragAndDrop} from './module/dragAndDrop.js';


(function () {
    var app = {
        init: function () {
            //Check if the browser contain some of the feature we need to enhance it, else give the user the normal version
            if (this.featureDectection()) {
                this.dragAndDrop();
            } else {
                console.log('Not all feature are support')
            }
        },
        featureDectection() {
            //Check for the feature we need
            if (feature.querySelector() && feature.eventListener() && feature.dragAndDrop()) {
                return true;
            } else {
                return false;
            }
        },
        dragAndDrop: function () {
            var items = document.querySelectorAll('main li');
            items.forEach(function (i) {
                i.addEventListener('dragstart', (item) => {
                    dragAndDrop.dragStart(item)
                })
                i.addEventListener('dragover', (item) => {
                    dragAndDrop.dragOver(item)
                })
                i.addEventListener('drop', (item) => {
                    dragAndDrop.dropItem(item)
                })
            })
        }
    }
    
    app.init()
})()