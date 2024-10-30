var form = document.getElementById("resume_form");
var resumeDisplayElement = document.getElementById("resume_display");
// handle form submit
form.addEventListener("submit", function () {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("name").value;
    var phoneNo = document.getElementById("name").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // generate the resume
    var resumeHtml = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n\n<ul>\n    <li><b>Name: </b> ".concat(name, "</li>\n    <li><b>Email: </b> ").concat(email, "</li>\n    <li><b>Phone No: </b> ").concat(phoneNo, "</li>\n</ul>\n<h2><b>Education</b></h2>\n<p>").concat(education, "</p>\n<h2><b>Experience</b></h2>\n<p>").concat(experience, "</p>\n<h2><b>Skills</b></h2>\n<p>").concat(skills, "</p>");
    // dispplay the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("The resume display element is missing ");
    }
});
