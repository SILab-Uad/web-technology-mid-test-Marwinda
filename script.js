// TODO: Implement the password generation logic based on user input


const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let characterSet = '';
    if (options.uppercase) characterSet += uppercase;
    if (options.lowercase) characterSet += lowercase;
    if (options.numbers) characterSet += numbers;
    if (options.specialChars) characterSet += specialChars;

    if (characterSet === '') characterSet = lowercase;

    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor (Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const options = {
        uppercase: 
document.getElementById('includeUppercase').checked,
        lowercase: 
document.getElementById('includeLowercase').checked,
        numbers: 
document.getElementById('includeNumbers').checked,
        specialChars: 
document.getElementById('includeSpecialChars').checked
    };
    const length = 
parseInt(document.getElementById('length').value);

    if (isNaN(length) || lengtj < 8 || length > 128) {
        alert('Password length must be between 8 and 128 characters.');
        return;
    }

    const password = 
generatePassword(length, options);
    
document.getElementById('passwordOutput').textContent = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const password = document.getElementById('passwordOutput').textContent;
    
    if (password) {
       
 navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            
console.error('Failed to copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});

