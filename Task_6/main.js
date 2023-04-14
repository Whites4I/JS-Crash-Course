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

        css += `}`

        return css
    }
}

const Button = new CssClass('button');

Button.setStyles('background-color', 'green')
Button.setStyles('margin', 0)
console.log(Button)
// Body.deleteStyles = 'background-color';
console.log(Button.styles)
console.log(Button.getCSS)
