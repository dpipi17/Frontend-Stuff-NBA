export default class TwoColumnCompare {

    static afterRender() {
        var table = document.getElementById('column_compare_table');

        //TODO: need to verify cross-browser support of these vars
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
                let percent = 100 / (firstValue + secondValue);
                let firstColor = firstValue >= secondValue ? "#006bb6" : "#DDDDDD";
                let secondColor = secondValue >= firstValue ? "#006bb6" : "#DDDDDD";


                cells[0].style.backgroundImage = `linear-gradient(to left, ${firstColor}, ${firstColor})`;
                cells[0].style.backgroundSize = (percent * firstValue) + "% 100%";
                cells[0].style.transitionDelay = x / 20 + "s";

                cells[2].style.backgroundImage = `linear-gradient(to left, ${secondColor}, ${secondColor})`;
                cells[2].style.backgroundSize = (percent * firstValue) + "% 100%";
                cells[2].style.transitionDelay = x / 20 + "s";
            }
        }
    }

    static render(callback, rows) {
        let content = `
            <table id="column_compare_table">
                <tr><th>Bam Adebayo</th><th>Season</th><th>Bam Adebayo</th></tr>
                <tr>
                    <td>3</td>
                    <td>Value A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Value B</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Value A</td>
                    <td>8</td>
                </tr>
            </table>
        `;
        callback(content);
        this.afterRender();
    }
}