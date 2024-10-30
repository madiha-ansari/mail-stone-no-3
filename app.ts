var form = document.getElementById("resume_form") as HTMLFormElement;
var resumeDisplayElement = document.getElementById("resume_display") as HTMLDivElement;

// handle form submit
form.addEventListener("submit", () => {
    event?.preventDefault()
    // collect input values
    var name = (document.getElementById("name") as HTMLInputElement).value;
    var email = (document.getElementById("name") as HTMLInputElement).value;
    var phoneNo = (document.getElementById("name") as HTMLInputElement).value;
    var education = (document.getElementById("Education") as HTMLInputElement).value;
    var experience = (document.getElementById("Experience") as HTMLInputElement).value;
    var skills = (document.getElementById("Skills") as HTMLInputElement).value;

    // generate the resume
    var resumeHtml = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<ul>
    <li><b>Name: </b> ${name}</li>
    <li><b>Email: </b> ${email}</li>
    <li><b>Phone No: </b> ${phoneNo}</li>
</ul>
<h2><b>Education</b></h2>
<p>${education}</p>
<h2><b>Experience</b></h2>
<p>${experience}</p>
<h2><b>Skills</b></h2>
<p>${skills}</p>`;

    // dispplay the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else{
        console.log("The resume display element is missing ");        
    }
}
)

