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
            console.log('browser doesnt support classlist')
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
            console.log('does not support drag and drop')
            return false;
        }
    }
}

export {featureDetection}