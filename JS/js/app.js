// Task 1

const arr = [2, 4, 6, 8, 10];
console.log(arr[0]);
arr.push(12);
arr[5] = 14;
console.log(arr);

// Task 2

function myFunction(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    
    alert(num1 * num2)
    console.log(num1 * num2)
}

// Task 3

function checkNum(){
    const num3 = document.getElementById("num3").value;

    if (num3 === '4'){
        console.log('Correct answer')
        alert('Correct answer')
    }else{
        console.log('Wrong answer try again')
        alert('Wrong answer try again')
    }
}

// Task 4

window.addEventListener('DOMContentLoaded', function () {

    let people = [
        ['Taylor', 'Swift', 31],
        ['Will', 'Smith', 53],
        ['Ryan', 'Reynolds', 45],
        ['Emma', 'Watson', 31],
        ['Chris', 'Hemsworth', 38]
    ];


    function peopleTable(people){
        const tableHead = `
            <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
        `; 

        const tableFoot = `
            </tbody>
        </table>
        `;

        let tableBody = '';

        for (let i = 0; i < people.length; i++){
            let firstName = people[i][0];
            let lastName = people[i][1];
            let age = people[i][2];

            tableBody += `
                <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${age}</td>
                </tr>
            `
        }
        return tableHead + tableBody + tableFoot;
    }

    document.getElementById('people')
            .insertAdjacentHTML(
                'afterbegin',
                peopleTable(people))
})