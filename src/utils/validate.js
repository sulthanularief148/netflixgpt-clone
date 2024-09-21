
export const formValidation = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);
    console.log(`Email validation: ${isEmailValid}`);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    console.log(`Password validation: ${isPasswordValid}`);

    // Error messages for validation failures
    if (!email) return "Email is required.";
    if (!isEmailValid) return "Email ID is not valid.";

    if (!password) return "Password is required.";
    if (!isPasswordValid) return "Password must be at least 8 characters long, including uppercase, lowercase, a number, and a special character.";

    return null;
};
