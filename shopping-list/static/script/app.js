import {featureDetection as feature} from './module/featureDectection.js';
import {dragAndDrop} from './module/dragAndDrop.js';

var app = {
    init: function () {
        //Check if the browser contain some of the feature we need to enhance it, else give the user the normal version
        if (this.featureDectection()) {
            this.dragAndDrop();
        } else {
            console.log('Not all feature are support')
        }
    },
    featureDectection : function (){
        //Check for the feature we need
        if (feature.querySelector() && feature.eventListener() && feature.dragAndDrop() && feature.classList()) {
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
}

app.init()