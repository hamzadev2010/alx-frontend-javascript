interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const studentOne: Student = {
  firstName: 'Hamza',
  lastName: 'chankour',
  age: 31,
  location: 'Morocco'
}
const studentTwo: Student = {
  firstName: 'Hamza',
  lastName: 'chan',
  age: 31,
  location: 'Morocco',
}

const studentsList: Student[] = [studentOne, studentTwo];

const table = document.createElement('table');
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell(0);
const locationHeader = headerRow.insertCell(1);
nameHeader.textContent = 'Name';
locationHeader.textContent = 'Location';

studentsList.forEach(student => {
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  nameCell.textContent = `${student.firstName} ${student.lastName}`;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
