document.addEventListener("DOMContentLoaded", () => {
    const stateSelect = document.getElementById("state");
    const adTitleInput = document.getElementById("ad-title");
    const descriptionInput = document.getElementById("description");
    const priceInput = document.getElementById("price");
    const postNowButton = document.querySelector(".submit-btn");
    const errorMessages = document.querySelectorAll(".error");
    const optionGroups = document.querySelectorAll(".options");

    // Function to validate form fields
    function validateForm() {
        let isValid = true;

        // Validate State
        if (stateSelect && stateSelect.value.trim() === "") {
            showError(stateSelect, "Please select a state.");
            isValid = false;
        } else {
            hideError(stateSelect);
        }

        // Validate Ad Title
        if (adTitleInput && adTitleInput.value.trim() === "") {
            showError(adTitleInput, "Ad title is required.");
            isValid = false;
        } else {
            hideError(adTitleInput);
        }

        // Validate Description
        if (descriptionInput && descriptionInput.value.trim() === "") {
            showError(descriptionInput, "Description is required.");
            isValid = false;
        } else {
            hideError(descriptionInput);
        }

        // Validate Price
        if (priceInput && priceInput.value.trim() === "") {
            showError(priceInput, "Price is required.");
            isValid = false;
        } else {
            hideError(priceInput);
        }

        // Enable or disable the "Post Now" button
        postNowButton.disabled = !isValid;
    }

    // Function to show error message
    function showError(inputElement, message) {
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error")) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        }
    }

    // Function to hide error message
    function hideError(inputElement) {
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error")) {
            errorElement.textContent = "";
            errorElement.style.display = "none";
        }
    }

    // Function to handle button selection
    function handleButtonSelection(event) {
        const buttons = event.currentTarget.querySelectorAll("button");
        buttons.forEach(button => button.classList.remove("selected")); // Deselect all buttons
        event.target.classList.add("selected"); // Select the clicked button
    }

    // Add event listeners to form fields
    if (stateSelect) stateSelect.addEventListener("change", validateForm);
    if (adTitleInput) adTitleInput.addEventListener("input", validateForm);
    if (descriptionInput) descriptionInput.addEventListener("input", validateForm);
    if (priceInput) priceInput.addEventListener("input", validateForm);

    // Add event listeners to button groups
    optionGroups.forEach(group => {
        group.addEventListener("click", handleButtonSelection);
    });
});