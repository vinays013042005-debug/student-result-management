// --- Global View Management ---

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
        page.classList.add('hidden-page');
    });
    document.querySelectorAll('.dashboard').forEach(dash => {
        dash.classList.remove('active-page');
        dash.classList.add('hidden-page');
    });
}

function showWelcomePage() {
    hideAllPages();
    document.getElementById('welcome-page').classList.remove('hidden-page');
    document.getElementById('welcome-page').classList.add('active-page');
}

function showAdminLogin() {
    hideAllPages();
    document.getElementById('admin-login').classList.remove('hidden-page');
    document.getElementById('admin-login').classList.add('active-page');
}

function showStudentLogin() {
    hideAllPages();
    document.getElementById('student-login').classList.remove('hidden-page');
    document.getElementById('student-login').classList.add('active-page');
}

function showAdminDashboard() {
    hideAllPages();
    document.getElementById('admin-dashboard').classList.remove('hidden-page');
    document.getElementById('admin-dashboard').classList.add('active-page');
    loadContent('add-students'); // Load a default page on login
}

// --- Login Handlers ---

document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // --- Simple hardcoded validation (in a real app, this would be an API call) ---
    if (username === 'admin' && password === '123') {
        alert('Admin Login Successful!');
        showAdminDashboard();
    } else {
        alert('Invalid Admin Credentials. Try "admin" / "123"');
    }
});

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const rollNumber = document.getElementById('student-roll-number').value;

    // --- Simulate result retrieval (in a real app, this would be an API call) ---
    if (rollNumber.trim() !== '') {
        alert(`Searching for result for Roll Number: ${rollNumber}. (Result display page would load here)`);
        // In a real app, you would load a new page with the result content (like Screenshot 165731)
    } else {
        alert('Please enter a roll number.');
    }
});

// --- Dashboard Functionality ---

function loadContent(viewName) {
    const contentArea = document.getElementById('main-content');
    let htmlContent = '';

    // Remove red highlight from all sidebar buttons
    document.querySelectorAll('.sidebar button').forEach(btn => {
        btn.style.backgroundColor = ''; // Reset to CSS default
        btn.style.color = ''; // Reset to CSS default
    });

    switch (viewName) {
        case 'add-students':
            // Based on Screenshot 165602
            htmlContent = `
                <h2>Add new Students</h2>
                <div class="form-grid">
                    <label for="course">Course Name</label>
                    <select id="course">
                        <option>B.E</option>
                        <option>B.Tech</option>
                    </select>

                    <label for="branch">Branch Name</label>
                    <select id="branch">
                        <option>CSE</option>
                        <option>ECE</option>
                    </select>

                    <label for="roll-num">Roll Number</label>
                    <input type="text" id="roll-num">

                    <label for="name">Name</label>
                    <input type="text" id="name">

                    <label for="gender">Gender</label>
                    <select id="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <label for="fname">Father's Name</label>
                    <input type="text" id="fname">
                    
                    <div class="grid-actions">
                        <button onclick="alert('Student Created!')">Create</button>
                    </div>
                </div>
            `;
            // Highlight the active button
            document.getElementById('add-students-btn').style.backgroundColor = '#fff';
            break;
            
        case 'insert-result':
            // Based on Screenshot 165628 (Input for marks)
            // Note: This input form is simpler than the final result display (165731)
            htmlContent = `
                <h2>Insert new Result</h2>
                <div class="form-grid-result">
                    <label for="res-roll">Roll Number</label>
                    <input type="text" id="res-roll">
                    
                    <label for="sepm">SEPM</label>
                    <input type="text" id="sepm">
                    
                    <label for="cn">CN</label>
                    <input type="text" id="cn">
                    
                    <label for="toc">TOC</label>
                    <input type="text" id="toc">
                    
                    <label for="ai">AI</label>
                    <input type="text" id="ai">
                    
                    <label for="rmipr">RMIPR</label>
                    <input type="text" id="rmipr">
                    
                    <div class="grid-actions-result">
                        <button onclick="alert('Result Saved!')">Save</button>
                    </div>
                </div>
            `;
            // Highlight the active button
            document.getElementById('insert-result-btn').style.backgroundColor = '#ff3333';
            document.getElementById('insert-result-btn').style.color = 'white';
            break;

        case 'registered-students':
            // Based on Screenshot 165650 (Table view)
            htmlContent = `
                <h2>Registered Students</h2>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Title 1</th>
                            <th>Title 2</th>
                            <th>Title 3</th>
                            <th>Title 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Ravi Sharma</td>
                            <td>B.E (CSE)</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Priya Varma</td>
                            <td>B.E (CSE)</td>
                            <td>Female</td>
                        </tr>
                        </tbody>
                </table>
            `;
            // Highlight the active button
            document.getElementById('registered-students-btn').style.backgroundColor = '#fff';
            break;

        case 'all-results':
            // Based on Screenshot 165711 (Table view)
            htmlContent = `
                <h2>All Students Result</h2>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Title 1</th>
                            <th>Title 2</th>
                            <th>Title 3</th>
                            <th>Title 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Ravi Sharma</td>
                            <td>78%</td>
                            <td>Pass</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Priya Varma</td>
                            <td>65%</td>
                            <td>Pass</td>
                        </tr>
                        </tbody>
                </table>
            `;
            // Highlight the active button
            document.getElementById('all-results-btn').style.backgroundColor = '#ff3333';
            document.getElementById('all-results-btn').style.color = 'white';
            break;

        default:
            htmlContent = '<h2>Content Not Found</h2>';
    }

    contentArea.innerHTML = htmlContent;
}

function logout() {
    alert('Logged out successfully.');
    showWelcomePage();
}

// Additional CSS for the dynamically loaded content in script.js (Form Grid and Table)
// You would add these styles to your style.css file.
/*
.form-grid {
    display: grid;
    grid-template-columns: 150px 250px;
    gap: 10px 20px;
    max-width: 450px;
    margin: 20px auto;
}

.form-grid label {
    text-align: right;
    font-weight: normal;
}

.form-grid select, .form-grid input {
    width: 100%;
}

.grid-actions {
    grid-column: 2 / 3;
    text-align: right;
    margin-top: 10px;
}

.form-grid-result {
    display: grid;
    grid-template-columns: 150px 200px;
    gap: 10px 20px;
    max-width: 400px;
    margin: 20px auto;
}

.form-grid-result label {
    text-align: left;
    font-weight: bold;
}

.form-grid-result input {
    padding: 5px;
}

.grid-actions-result {
    grid-column: 2 / 3;
    text-align: right;
    margin-top: 20px;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.data-table th, .data-table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

.data-table th {
    background-color: #ddd;
}
*/
