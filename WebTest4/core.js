function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    if (name === '' || email === '' || number === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    if (name.length < 3 || name.length > 6) {
        alert('Name must be between 3 and 6 characters.');
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (number.length !== 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }

    return true;
}
