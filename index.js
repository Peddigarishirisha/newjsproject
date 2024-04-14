
            
            
            // var table = document.querySelector(".table");
            // var row = null;
            
            // function Submit(event) {
            //     event.preventDefault();
            //     var dataEntered = Retrivedata();
            //     if (dataEntered == null) {
            //         return; // Stop form submission if data is not entered
            //     }
            
            //     var readData = readingdatafromlocalstorage(dataEntered);
            //     if (readData === false) {
            //         return; // Stop form submission if data already exists
            //     }
            
            //     insert(readData);
            
            //     update();
            //     var msgElement = document.getElementById("msg");
            //     if (msgElement) {
            //         msgElement.innerHTML = '<h3 class="p">Data updated</h3>';
            //     }
            //     document.getElementById("form").reset();
            // }
            
            // function Retrivedata() {
            //     var name1 = document.getElementById("inputname1").value.trim();
            //     var email = document.getElementById("inputEmail3").value.trim();
            //     var Phonenumber = document.getElementById("inputPassword3").value.trim();
            
            //     var error1 = document.getElementById("err1"); // Error message for empty fields
            //     var error2 = document.getElementById("name"); // Error message for name validation
            //     var error3 = document.getElementById("email");
            //     var error4 = document.getElementById("Phone");
            
            //     // Clear error messages
            //     error1.innerHTML = '';
            //     error2.innerHTML = '';
            //     error3.innerHTML = '';
            //     error4.innerHTML = '';
            
            //     // Check if any field is empty
            //     if (name1 === "" || email === "" || Phonenumber === "") {
            //         error1.innerHTML = 'Please fill in all details';
            //         return null;
            //     }
            
            //     // Name validation: Length should be 7
            //     if (name1.length !== 7) {
            //         error2.innerHTML = "Name length should be Seven";
            //         return null;
            //     }
            
            //     // Email format validation
            //     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            //     if (!emailPattern.test(email)) {
            //         error3.innerHTML = 'Invalid email format';
            //         return null;
            //     }
            
            //     // Phone number validation using regular expression
            //     var phonePattern = /^[6-9]\d{9}$/;
            //     if (!phonePattern.test(Phonenumber)) {
            //         error4.innerHTML = 'Invalid phone number';
            //         return null;
            //     }
            
            //     // Check if data already exists
            //     if (isDataExists(name1, email, Phonenumber)) {
            //         return false;
            //     }
            
            //     return [name1, email, Phonenumber];
            // }
            
            // function isDataExists(name, email, phone) {
            //     var storedDataString = localStorage.getItem("storedData");
            //     var storedData;
            
            //     try {
            //         storedData = JSON.parse(storedDataString) || [];
            //     } catch (error) {
            //         storedData = [];
            //     }
            
            //     for (var i = 0; i < storedData.length; i++) {
            //         if (storedData[i].n1 === name) {
            //             alert('Username already exists');
            //             return true;
            //         }
            //         if (storedData[i].e1 === email) {
            //             alert('Email already exists');
            //             return true;
            //         }
            //         if (storedData[i].p1 === phone) {
            //             alert('Phone number already exists');
            //             return true;
            //         }
            //     }
            
            //     return false;
            // }
            
            // function readingdatafromlocalstorage(dataEntered) {
            //     var storedDataString = localStorage.getItem("storedData");
            //     var storedData;
            
            //     try {
            //         storedData = JSON.parse(storedDataString) || [];
            //     } catch (error) {
            //         storedData = [];
            //     }
            
            //     storedData.push({
            //         n1: dataEntered[0],
            //         e1: dataEntered[1],
            //         p1: dataEntered[2]
            //     });
            
            //     localStorage.setItem("storedData", JSON.stringify(storedData));
            
            //     return dataEntered;
            // }
            
            // function insert(readData) {
            //     var newRow = table.insertRow();
            //     newRow.insertCell(0).innerHTML = readData[0];
            //     newRow.insertCell(1).innerHTML = readData[1];
            //     newRow.insertCell(2).innerHTML = readData[2];
            //     newRow.insertCell(3).innerHTML = '<button onclick="edit(this)">Edit</button> <button onclick="remove(this)">Delete</button>';
            
            //     updateLocalStorage();
            // }
            
            // function edit(a) {
            //     row = a.parentElement.parentElement;
            //     document.getElementById("inputname1").value = row.cells[0].innerHTML;
            //     document.getElementById("inputEmail3").value = row.cells[1].innerHTML;
            //     document.getElementById("inputPassword3").value = row.cells[2].innerHTML;
            
            //     msg.innerHTML = '<h3 class="p">Edit mode activated</h3>';
            // }
            
            // function update() {
            //     row.cells[0].innerHTML = document.getElementById("inputname1").value;
            //     row.cells[1].innerHTML = document.getElementById("inputEmail3").value;
            //     row.cells[2].innerHTML = document.getElementById("inputPassword3").value;
            
            //     updateLocalStorage();
            
            //     row = null;
            // }
            
            // function remove(a) {
            //     var ans = confirm("Warning: Are you sure you want to delete this record?");
            //     if (ans == true) {
            //         row = a.parentElement.parentElement;
            //         document.querySelector(".table").deleteRow(row.rowIndex);
            
            //         updateLocalStorage();
            
            //         row = null;
            //     }
            // }
            
            // function updateLocalStorage() {
            //     var data = [];
            //     var rows = table.rows;
            
            //     for (var i = 1; i < rows.length; i++) {
            //         var cells = rows[i].cells;
            //         data.push({
            //             n1: cells[0].innerHTML,
            //             e1: cells[1].innerHTML,
            //             p1: cells[2].innerHTML
            //         });
            //     }
            //     localStorage.setItem("storedData", JSON.stringify(data));
            // }
            
            // window.onload = function () {
            //     var storedData = JSON.parse(localStorage.getItem("storedData")) || [];
            //     storedData.forEach(function (data) {
            //         if (!isDataInTable(data)) {
            //             insert([data.n1, data.e1, data.p1]);
            //         }
            //     });
            // };
            
            // function isDataInTable(data) {
            //     var rows = table.rows;
            //     for (var i = 1; i < rows.length; i++) {
            //         var cells = rows[i].cells;
            //         if (cells[0].innerHTML === data.n1 && cells[1].innerHTML === data.e1 && cells[2].innerHTML === data.p1) {
            //             return true;
            //         }
            //     }
            //     return false;
            // }

            var table = document.querySelector(".table");
var row = null;

function Submit() {
    var dataEntered = Retrivedata();
    if (dataEntered == null) {
        return;
    }

    var readData = readingdatafromlocalstorage(dataEntered);
    if (readData === false) {
        return;
    }

    var existingData = checkExistingData(readData);
    if (existingData.length > 0) {
        existingData.forEach(function (data) {
            if (data.field === 'name') {
                alert('Username already exists');
            } else if (data.field === 'email') {
                alert('Email already exists');
            } else if (data.field === 'phone') {
                alert('Phone number already exists');
            }
        });
        return;
    }

    if (row) {
        update();
    } else {
        insert(readData);
    }
    document.getElementById("form").reset();
}

function Retrivedata() {
    var name1 = document.getElementById("inputname1").value.trim();
    var email = document.getElementById("inputEmail3").value.trim();
    var Phonenumber = document.getElementById("inputPassword3").value.trim();

    var error1 = document.getElementById("err1"); // Error message for empty fields
    var error2 = document.getElementById("name"); // Error message for name validation
    var error3 = document.getElementById("email");
    var error4 = document.getElementById("Phone");

    // Clear error messages
    error1.innerHTML = '';
    error2.innerHTML = '';
    error3.innerHTML = '';
    error4.innerHTML = '';

    // Check if any field is empty
    if (name1 === "" || email === "" || Phonenumber === "") {
        error1.innerHTML = 'Please fill in all details';
        return null;
    }

    // Name validation: Start with capital letter
    var namePattern = /^[A-Z][a-z]*$/;
    if (!namePattern.test(name1)) {
        error2.innerHTML = "Name should start with a capital letter";
        return null;
    }

    // Email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error3.innerHTML = 'Invalid email format';
        return null;
    }

    // Phone number validation using regular expression
    var phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(Phonenumber)) {
        error4.innerHTML = 'Invalid phone number';
        return null;
    }

    return [name1, email, Phonenumber];
}

function readingdatafromlocalstorage(dataEntered) {
    var storedDataString = localStorage.getItem("storedData");
    var storedData;

    try {
        storedData = JSON.parse(storedDataString) || [];
    } catch (error) {
        storedData = [];
    }

    storedData.push({
        n1: dataEntered[0],
        e1: dataEntered[1],
        p1: dataEntered[2]
    });

    localStorage.setItem("storedData", JSON.stringify(storedData));

    return dataEntered;
}

function checkExistingData(data) {
    var existingData = [];
    var rows = table.rows;

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        var existingName = cells[0].innerHTML.trim();
        var existingEmail = cells[1].innerHTML.trim();
        var existingPhone = cells[2].innerHTML.trim();

        if (existingName === data[0]) {
            existingData.push({ field: 'name' });
        }
        if (existingEmail === data[1]) {
            existingData.push({ field: 'email' });
        }
        if (existingPhone === data[2]) {
            existingData.push({ field: 'phone' });
        }
    }

    return existingData;
}

function insert(readData) {
    var newRow = table.insertRow();
    newRow.insertCell(0).innerHTML = readData[0];
    newRow.insertCell(1).innerHTML = readData[1];
    newRow.insertCell(2).innerHTML = readData[2];
    newRow.insertCell(3).innerHTML = '<button onclick="edit(this)" class="btn btn-secondary">Edit</button> <button onclick="remove(this)" class="btn btn-danger">Delete</button>';

    updateLocalStorage();
}

// Function to execute the update directly without checking existing data
function edit(a) {
    row = a.closest("tr");
    document.getElementById("inputname1").value = row.cells[0].innerHTML;
    document.getElementById("inputEmail3").value = row.cells[1].innerHTML;
    document.getElementById("inputPassword3").value = row.cells[2].innerHTML;

    // Clear existing error messages
    document.getElementById("err1").innerHTML = '';
    document.getElementById("name").innerHTML = '';
    document.getElementById("email").innerHTML = '';
    document.getElementById("Phone").innerHTML = '';
z
    // Execute the update directly without checking existing data
    update();

    // Reset the row to null after update
    row = null;
}

function update() {
    row.cells[0].innerHTML = document.getElementById("inputname1").value;
    row.cells[1].innerHTML = document.getElementById("inputEmail3").value;
    row.cells[2].innerHTML = document.getElementById("inputPassword3").value;

    updateLocalStorage();

    row = null;
}

function remove(a) {
    var ans = confirm("Warning: Are you sure you want to delete this record?");
    if (ans == true) {
        row = a.closest("tr");
        document.querySelector(".table").deleteRow(row.rowIndex);

        updateLocalStorage();

        row = null;
    }
}

function updateLocalStorage() {
    var data = [];
    var rows = table.rows;

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        data.push({
            n1: cells[0].innerHTML,
            e1: cells[1].innerHTML,
            p1: cells[2].innerHTML
        });
    }
    localStorage.setItem("storedData", JSON.stringify(data));
}

window.onload = function () {
    var storedData = JSON.parse(localStorage.getItem("storedData")) || [];
    storedData.forEach(function (data) {
        if (!isDataInTable(data)) {
            insert([data.n1, data.e1, data.p1]);
        }
    });
};

function isDataInTable(data) {
    var rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        if (cells[0].innerHTML === data.n1 && cells[1].innerHTML === data.e1 && cells[2].innerHTML === data.p1) {
            return true;
        }
    }
    return false;
}