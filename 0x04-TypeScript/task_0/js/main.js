var studentsList = [
    { firstName: "Hamza", lastName: "chankour", location: "Morocco" },
    { firstName: "Hamza", lastName: "chan", location: "Morocoo" }
];

var table = document.createElement('table');
table.style.borderCollapse = "collapse";
table.style.border = "2px solid pink";

studentsList.forEach(function (student) {
    var row = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = student.firstName + " " + student.lastName;
    nameCell.style.border = "1px solid pink";
    nameCell.style.padding = "8px";
    nameCell.style.textAlign = "center";

    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid pink";
    locationCell.style.padding = "8px";
    locationCell.style.textAlign = "center";

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);
