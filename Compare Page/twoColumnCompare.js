export default class TwoColumnCompare {

    static afterRender() {
        var table = document.getElementById('column_compare_table');

        var h = table.clientHeight,
            t = table.getBoundingClientRect().top,
            wT = window.pageYOffset || document.documentElement.scrollTop,
            wH = window.innerHeight;

        if (wT + wH > t + h / 2) {
            var rows = table.getElementsByTagName('tr');

            for (let x = 1; x < rows.length; x++) {
                var cells = rows[x].querySelectorAll('td');

                var firstValue = Number(cells[0].innerHTML);
                var secondValue = Number(cells[2].innerHTML);
                let percent = 100 / (1.2 * (firstValue + secondValue));
                let firstColor = firstValue >= secondValue ? "#006bb6" : "#DDDDDD";
                let secondColor = secondValue >= firstValue ? "#006bb6" : "#DDDDDD";


                cells[0].style.backgroundImage = `linear-gradient(to left, ${firstColor}, ${firstColor})`;
                cells[0].style.backgroundSize = (percent * firstValue) + "% 100%";
                cells[0].style.transitionDelay = x / 50 + "s";

                cells[2].style.backgroundImage = `linear-gradient(to left, ${secondColor}, ${secondColor})`;
                cells[2].style.backgroundSize = (percent * secondValue) + "% 100%";
                cells[2].style.transitionDelay = x / 50 + "s";
            }
        }
    }

    static render(callback, rows, firstColumnName, secondColumnName) {
        let content = `
            <table id="column_compare_table">
                <tr>
                    <th>${firstColumnName}</th>
                    <th></th>
                    <th>${secondColumnName}</th>
                </tr>
                ${rows.map(row => row.render()).join(' ')}
            </table>
        `;
        callback(content);
        this.afterRender();
    }
}