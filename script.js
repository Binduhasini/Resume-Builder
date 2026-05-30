function generateResume() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let skills = document.getElementById("skills").value
    .split(",")
    .map(s => `<li>${s.trim()}</li>`)
    .join("");

  let projects = document.getElementById("projects").value
    .split(",")
    .map(p => `<li>${p.trim()}</li>`)
    .join("");

  let output = `
    <div class="resume">

      <div class="header">
        <h1>${name}</h1>
        <p>${email} | ${phone}</p>
      </div>

      <div class="section">
        <h2>Objective</h2>
        <p>
          Motivated Computer Science student seeking opportunities to apply technical skills and build real-world applications.
        </p>
      </div>

      <div class="section">
        <h2>Skills</h2>
        <ul>${skills}</ul>
      </div>

      <div class="section">
        <h2>Projects</h2>
        <ul>${projects}</ul>
      </div>

      <div class="section">
        <h2>Certifications</h2>
        <ul>
          <li>Python Programming - Coursera</li>
          <li>Web Development Basics - Udemy</li>
        </ul>
      </div>

      <div class="section">
        <h2>Declaration</h2>
        <p>
          I hereby declare that all the information provided above is true and correct to the best of my knowledge.
        </p>
      </div>

    </div>
  `;

  document.getElementById("resumeOutput").innerHTML = output;
}