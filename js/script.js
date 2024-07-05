function showDonorForm() {
    document.getElementById('donor-form').style.display = 'block';
    document.getElementById('recipient-form').style.display = 'none';
}

function showRecipientForm() {
    document.getElementById('donor-form').style.display = 'none';
    document.getElementById('recipient-form').style.display = 'block';
    loadBloodStock();
}

function validateDonorForm() {
    let age = document.getElementById('age').value;
    if (age < 18 || age > 65) {
        alert("Age must be between 18 and 65.");
        return false;
    }
    document.getElementById('post-registration-message').innerText = "Thank you for registering. A medical check will be conducted when you visit the donation center.";
    return true;
}

function loadBloodStock() {
    // This should be an AJAX call to fetch blood stock from the server
    document.getElementById('blood-stock').innerHTML = `
        <table>
            <tr><th>Blood Group</th><th>Available Units</th></tr>
            <tr><td>A+</td><td>10</td></tr>
            <tr><td>A-</td><td>5</td></tr>
            <tr><td>B+</td><td>7</td></tr>
            <tr><td>B-</td><td>3</td></tr>
            <tr><td>O+</td><td>15</td></tr>
            <tr><td>O-</td><td>2</td></tr>
            <tr><td>AB+</td><td>4</td></tr>
            <tr><td>AB-</td><td>1</td></tr>
        </table>
    `;
}
