

# Feature detection
>Feature detection involves working out whether a browser supports a certain block of code, and running different code dependent on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers. - [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

__Link to prototype__

[Hamburger menu](https://niyorn.github.io/browser-technologies/opdracht2/Hamburger_menu/index.html)

[Pop up](https://niyorn.github.io/browser-technologies/opdracht2/Pop_up/index.html)

## Hamburger menu
The hamburger is often used in a lot of modern site, but would happen if we have javascript disabled. Is the hamburger still functional? If not, how can we make the menu still functional for the people who doesn't have javacript enabled?

### Javascript
The hamburger is created without javascript in mind. So even when there is no javascript the user is still able to access the menu items. Alternatively the hamburger is only activated when javacript is enabled.

*This line of code only works, because javascript is enabled*
```javascript
    document.querySelector('header').classList.add('enhanced')
```

<details>
    <summary>Hamburger menu without javscscript</summary>
    <img src='readme-assets/hamburger-menu-resize-without-javascript.gif' alt='Hamburger menu resized without enabling javascript'>
</details>

<details>
    <summary>Hamburger menu with javscscript</summary>
    <img src='readme-assets/hamburger-menu-resize-with-javascript.gif' alt='Hamburger menu resized without enabling javascript'>
</details>

### CSS fallback
The fallback that is used to create a functional layout for all browsers.

#### CSS initual value
When setting the width of the nav bar a initial value is used to get the initial value of an element. When the test is done on IE, our layout broke and the navigation doesn't take whole width of the browser. In short IE doesn't support the css value *initial*.

```css
    nav li {
        width: 100%;
        width: initial;
    }
```
#### Let and const
When I start developing the hamburger menu, I've declared variable with the __let__ and __const__. But I've found out later that not all browsers support this variable declaration and we need to do a feature detection for this syntax. But to my shame, I do not found a way to do this feature detection for this syntax. I've tried a try catch and if/else statement, but the browsers always gives an error when a let is found and will not execute any code further.

To fix this problem I did what I only know and that is changing let and const to var;


#### Classlist
Because we're using the classList syntax to add the *enhanced* class for creating the hamburger menu, we're going to check if the browser support this syntax.

```javascript
    var checkClassList = document.querySelector('body').classList;

    if (checkClassList) {
        console.log('browser support classlist');

    } else {
        console.log('browser doesnt support classlist')
        return false;
    }
```

And because we're using the *classList.toggle()* and the *classList.add()* we also need to check if the browser support this syntax.

```javascript
    var checkClassList = document.querySelector('body').classList;

    if (checkClassList) {
        console.log('browser support classlist');

        try {
            checkClassList.add();
            checkClassList.toggle();

            return true;
        } catch (err) {
            console.log('browser does not support classList.add or classList.toggle');
            return false;
        }

    } else {
        console.log('browser doesnt support classlist')
        return false;
    }
```

We're using a try/catch instead of if/else because if we're checking it with if/else the if/else will give a undifined back, but we know it does exist. With a try/catch it will trying to execute the function or else it will gives an error.

### addEventListener
Add lastly we need to check if the browser support the syntax *addEventListener*, because we're checking if the user have clicked on the hamburger menu or not.

```javascript
    //Check support for addEventListner
    if(document.addEventListener){
        console.log('browser support addEventListener');
        return true;
    }
    else{
        console.log('browser does not support AddEventListner');
        return false;
    }
```                        




### Dialog tag
https://www.w3schools.com/TAGS/tag_dialog.asp
