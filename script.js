// JavaScript to toggle the navigation menu and implement smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  // Smooth scrolling behavior and close menu on link click
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
      navMenu.classList.remove("show"); // Close menu on link click
    });
  });
});

// JavaScript for filtering projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.classList.add("show");
    } else {
      project.classList.remove("show");
    }
  });
}

// Initially show all projects
filterProjects("all");

// JavaScript for Lightbox Effect
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-content");
  const closeBtn = document.getElementById("close-lightbox");

  document.querySelectorAll(".project img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// JavaScript for Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  function validateName() {
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      nameError.style.display = "block";
      return false;
    } else {
      nameError.textContent = "";
      nameError.style.display = "none";
      return true;
    }
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      return false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      return false;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
      return true;
    }
  }

  function validateMessage() {
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      messageError.style.display = "block";
      return false;
    } else {
      messageError.textContent = "";
      messageError.style.display = "none";
      return true;
    }
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  messageInput.addEventListener("input", validateMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidMessage = validateMessage();

    if (isValidName && isValidEmail && isValidMessage) {
      form.submit();
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });
});
