/* 
1. Реалізувати клас, який описує css клас. Клас CssClass повинен містити в собі:
• назва css класса;
• масив стилів;
• метод для встановлення стилю;
• метод для видалення стилю;
• метод getCSS(), який повертає CSS код у вигляді рядка.
*/

class CssClass {

    //назва css класса; масив стилів;
    constructor(nameCss) {
        this.nameCss = nameCss;
        this.styles = [];
    }

    //метод для встановлення стилю;
    setStyles(property, values) {
        this.styles[property] = values;
    }

    //метод для видалення стилю;
    set deleteStyles(property) {
        delete this.styles[property];
    }

    //метод getCSS(), який повертає CSS код у вигляді рядка.
    get getCSS() {
        let css = `.${this.nameCss} {`

        Object.keys(this.styles).forEach(element => {
            css += element + ': ' + this.styles[element] + '; ';
        });

        css += `}`;
        return css;
    }
}

const Overlay = new CssClass('form');

Overlay.setStyles('background-color', 'green');
Overlay.setStyles('margin', 0);
console.log(Overlay);
// Overlay.deleteStyles = 'background-color';
console.log(Overlay.getCSS);

/*
2. Реалізувати клас Button, який містить ширину, висоту, текст кнопки і метод showBtn(), 
який виводить кнопку на екран за допомогою тега button і функції document.write().
Реалізувати клас BootstrapButton, успадкувавши його від класу Button. 
Додати поле color і перевизначити метод showBtn() так, щоб кнопка виводилася зі стилями та вказаним кольором.
*/

class Button extends CssClass {
    constructor(width, height, nameCss, nameButton) {
        super(nameCss);
        this.nameButton = nameButton;
        this.setStyles('width', `${width}px`);
        this.setStyles('height', `${height}px`);
    }

    get getCSS() {
        let css = ``;

        Object.keys(this.styles).forEach(element => {
            css += element + ': ' + this.styles[element] + '; ';
        });

        return css;
    }

    showBtn() {
        const getButtonId = document.getElementById('button');
        getButtonId.innerHTML = `<button style="${this.getCSS}">${this.nameButton}</button>`;
        // document.write(`<button style="${this.getCSS}">${this.nameButton}</button>`);
    }
}

const buttonWrite = new Button(100, 50, 'button', 'ClickOnMe');
buttonWrite.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, nameCss, nameButton, color) {
        super(width, height, nameCss, nameButton)
        this.setStyles('color', `${color}`)
    }
}

const blueButton = new BootstrapButton(100, 50, 'blueButton', 'I am a blue button', 'blue');
blueButton.showBtn();