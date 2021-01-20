export default class CompareRow {

    constructor(fieldName, firstValue, secondValue) {
        this.fieldName = fieldName;
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    render() {
        return `
            <tr>
                <td>${this.firstValue}</td>
                <td>${this.fieldName}</td>
                <td>${this.secondValue}</td>
            </tr>
        `;
    }


}