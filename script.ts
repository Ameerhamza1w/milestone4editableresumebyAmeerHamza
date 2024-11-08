document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const projectsElement = document.getElementById('projects') as HTMLTextAreaElement;
    const languagesElement = document.getElementById('languages') as HTMLTextAreaElement;
    const certificationsElement = document.getElementById('certifications') as HTMLTextAreaElement;
    const profilePictureElement = document.getElementById('--ProfilePicture') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && linkedinElement && educationElement && experienceElement && skillsElement && profilePictureElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const linkedin = linkedinElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const projects = projectsElement.value;
        const languages = languagesElement.value;
        const certifications = certificationsElement.value;

        // Handle profile picture
        const profilePictureFile = profilePictureElement.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create Resume Output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
        <p><strong>LinkedIn:</strong> <span id="edit-linkedin" class="editable">${linkedin}</span></p>
        
        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>

        ${projects ? `<h3>Projects</h3><p id="edit-projects" class="editable">${projects}</p>` : ""}
        ${languages ? `<h3>Languages</h3><p id="edit-languages" class="editable">${languages}</p>` : ""}
        ${certifications ? `<h3>Certifications</h3><p id="edit-certifications" class="editable">${certifications}</p>` : ""}
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        } else {
            console.error('The Resume Output Element is Missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace content with an input field
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');

            input.addEventListener('blur', function() {
                currentElement.textContent = input.value;
                currentElement.style.display = 'inline';
                input.remove();
            });

            currentElement.style.display = 'none';
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
        });
    });
}
