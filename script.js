var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var linkedinElement = document.getElementById('linkedin');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var projectsElement = document.getElementById('projects');
    var languagesElement = document.getElementById('languages');
    var certificationsElement = document.getElementById('certifications');
    var profilePictureElement = document.getElementById('--ProfilePicture');
    if (nameElement && emailElement && phoneElement && linkedinElement && educationElement && experienceElement && skillsElement && profilePictureElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var linkedin = linkedinElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var projects = projectsElement.value;
        var languages = languagesElement.value;
        var certifications = certificationsElement.value;
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create Resume Output
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n        <p><strong>LinkedIn:</strong> <span id=\"edit-linkedin\" class=\"editable\">").concat(linkedin, "</span></p>\n        \n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n        ").concat(projects ? "<h3>Projects</h3><p id=\"edit-projects\" class=\"editable\">".concat(projects, "</p>") : "", "\n        ").concat(languages ? "<h3>Languages</h3><p id=\"edit-languages\" class=\"editable\">".concat(languages, "</p>") : "", "\n        ").concat(certifications ? "<h3>Certifications</h3><p id=\"edit-certifications\" class=\"editable\">".concat(certifications, "</p>") : "", "\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('The Resume Output Element is Missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content with an input field
            var input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');
            input.addEventListener('blur', function () {
                currentElement.textContent = input.value;
                currentElement.style.display = 'inline';
                input.remove();
            });
            currentElement.style.display = 'none';
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
            input.focus();
        });
    });
}
