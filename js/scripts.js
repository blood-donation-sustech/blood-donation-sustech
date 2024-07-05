document.addEventListener('DOMContentLoaded', function() {
    fetchBloodData();
    // Add any other initialization code here
});

function fetchBloodData() {
    fetch('data/blood_data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Use data to update the UI, for example:
            displayDonors(data.donors);
            displayRecipients(data.recipients);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayDonors(donors) {
    // Code to update the UI with donor data
}

function displayRecipients(recipients) {
    // Code to update the UI with recipient data
}

function showDonorForm() {
    document.getElementById('formContainer').innerHTML = `
        <div class="card">
            <div class="card-header">Donate Blood</div>
            <div class="card-body">
                <form>
                    <!-- Form fields go here -->
                    <div class="form-group">
                        <label for="donorName">Name</label>
                        <input type="text" class="form-control" id="donorName">
                    </div>
                    <!-- Add more form fields as needed -->
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    `;
}

function showRecipientForm() {
    document.getElementById('formContainer').innerHTML = `
        <div class="card">
            <div class="card-header">Request Blood</div>
            <div class="card-body">
                <form>
                    <!-- Form fields go here -->
                    <div class="form-group">
                        <label for="recipientName">Name</label>
                        <input type="text" class="form-control" id="recipientName">
                    </div>
                    <!-- Add more form fields as needed -->
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    `;
}
