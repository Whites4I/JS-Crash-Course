// Dark Theme for site

const Theme = {

    i: 0,

    changeTheme() {
        const darkMode = document.querySelector("html")

        if (Theme.i == 0) {
            Theme.i = 1;
            darkMode.setAttribute("data-bs-theme", "");
        } else {
            Theme.i = 0;
            darkMode.setAttribute("data-bs-theme", "dark");
        }
    }
}

Theme.changeTheme();

const buttonTheme = document.getElementById("flexSwitchCheckDefault");
buttonTheme.addEventListener("click", Theme.changeTheme);

// Working with the table

const TableCars = {
    arrCar: [],

    getCarForm() {
        const dataForms = Array.from(document.querySelectorAll("#inputCar input")).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
        const clearedCar = document.getElementById("clearedCustoms").value;
        dataForms.clearedCar = clearedCar;
        this.arrCar.push(dataForms);
        dataForms.id = this.arrCar.length;
        return dataForms;
    },

    addCarToTable() {
        const dataForms = this.getCarForm();
        const tBody = document.querySelector("tbody");
        tBody.innerHTML +=
            `<tr>
                <th scope="row">${dataForms.id}</th>
                <td>${dataForms.modelCar}</td>
                <td>${dataForms.yearManufactureCar}</td>
                <td>${dataForms.priceCar}</td>
                <td>${dataForms.colorCar}</td>
                <td>${dataForms.clearedCar}</td>
            </tr>`;
    }
}

const buttonForm = document.getElementById("buttonForm");
buttonForm.addEventListener("click", event => { event.preventDefault(); TableCars.addCarToTable() })
//