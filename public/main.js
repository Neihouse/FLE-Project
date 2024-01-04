
document.addEventListener('DOMContentLoaded', function() {
    const createLeadForm = document.getElementById('create-lead-form');
    const leadsTableBody = document.getElementById('leads-table').querySelector('tbody');

    // Function to add a lead to the table
    function addLeadToTable(lead) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.phone}</td>
            <td>
                <button onclick="deleteLead('${lead._id}')">Delete</button>
            </td>
        `;
        leadsTableBody.appendChild(row);
    }

    // Function to load leads from the server and populate the table
    function loadLeads() {
        fetch('/api/leads')
            .then(response => response.json())
            .then(data => {
                data.leads.forEach(addLeadToTable);
            });
    }

    // Function to create a new lead
    createLeadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(createLeadForm);
        fetch('/api/leads', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(addLeadToTable);
    });

    // Function to delete a lead
    window.deleteLead = function(id) {
        fetch('/api/leads/' + id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            // Remove the lead from the table
        });
    };

    // Initial load of leads
    loadLeads();
});

// Add a scroll event listener to load more leads when the user scrolls to the bottom of the page
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadLeads(); // Function to load more leads
    }
});

// Update the loadLeads function to fetch and render leads lazily
const loadLeads = (() => {
    let loadedLeads = 0;
    const leadsPerLoad = 20; // Number of leads to load per request

    return () => {
        fetch(`/api/leads?skip=${loadedLeads}&limit=${leadsPerLoad}`)
            .then(response => response.json())
            .then(data => {
                data.leads.forEach(addLeadToTable);
                loadedLeads += data.leads.length;
            });
    };
})();

// Initial load of leads
loadLeads();
