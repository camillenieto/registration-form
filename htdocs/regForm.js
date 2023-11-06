function validateForm() {
    let isValid = true;

    // Get input values
    const fullName = document.getElementById('fullName').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('eMail').value.trim();
    const phoneNumber = document.getElementById('Number').value.trim();
    const studentNumber = document.getElementById('studentNumber').value.trim();
    const yearLevel = document.getElementById('yearLevel').value.trim();
    const degreeProgram = document.getElementById('degreeProgram').value;
    const customDegreeProgram = document.getElementById('customDegreeProgram').value.trim();

    // Validate Full Name
    if (fullName === '') {
        alert('Full Name is required');
        isValid = false;
    }

    // Validate Age
    if (isNaN(age) || age < 0) {
        alert('Invalid age. Please enter a valid age.');
        isValid = false;
    }

    // Validate Gender
    if (gender === '') {
        alert('Please select your gender.');
        isValid = false;
    }

    // Validate Email
    if (email === '' || !isValidEmail(email)) {
        alert('Invalid email. Please enter a valid email address.');
        isValid = false;
    }

    // Validate Phone Number
    if (phoneNumber === '' || !/^[0-9]{11}$/.test(phoneNumber)) {
        alert('Invalid phone number. Please enter a valid 11-digit phone number.');
        isValid = false;
    }

    // Validate Student Number
    if (studentNumber === '') {
        alert('Student Number is required');
        isValid = false;
    }

    // Validate Year Level
    if (yearLevel === '') {
        alert('Year Level is required');
        isValid = false;
    }

    // Validate Degree Program
    if (degreeProgram === '' || (degreeProgram === 'Other' && customDegreeProgram === '')) {
        alert('Degree Program is required');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function toggleCustomDegreeProgram() {
    const degreeProgramSelect = document.getElementById('degreeProgram');
    const customDegreeProgramInput = document.getElementById('customDegreeProgram');
    
    if (degreeProgramSelect.value === 'Other') {
        customDegreeProgramInput.disabled = false;
    } else {
        customDegreeProgramInput.disabled = true;
        customDegreeProgramInput.value = ''; // Clear the custom degree program input when it's disabled
    }
}

// Add an event listener to the degreeProgram select field to toggle the custom degree program input
document.getElementById('degreeProgram').addEventListener('change', toggleCustomDegreeProgram);