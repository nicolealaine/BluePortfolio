document.addEventListener("DOMContentLoaded", function (event) {
  const bodyTheme = document.querySelector("body");
  const themeButton = document.querySelector(".day-night-button");
  const themeImage = document.querySelector(".day-night-image");
  const linkedInImageLanding = document.querySelector(
    ".linkedin-image-landing"
  );
  const linkedInImageContact = document.querySelector(
    ".linkedin-image-contact"
  );
  const githubImageLanding = document.querySelector(".github-image-landing");
  const githubImageContact = document.querySelector(".github-image-contact");
  const htmlImage = document.querySelector(".html-image");
  const cssImage = document.querySelector(".css-image");
  const jsImage = document.querySelector(".js-image");
  const gitImage = document.querySelector(".git-image");
  const designImage = document.querySelector(".design-image");
  const figmaImage = document.querySelector(".figma-image");

  themeButton.addEventListener("click", () => {
    if (bodyTheme.classList.contains("light")) {
      bodyTheme.classList.remove("light");
      bodyTheme.classList.add("dark");
      themeImage.src = "images/sun-icon.webp";
      linkedInImageLanding.src = "images/linkedin-light.webp";
      linkedInImageContact.src = "images/linkedin-light.webp";
      githubImageLanding.src = "images/github-light.webp";
      githubImageContact.src = "images/github-light.webp";
      htmlImage.src = "images/html-light.webp";
      cssImage.src = "images/css-light.webp";
      jsImage.src = "images/js-light.webp";
      gitImage.src = "images/git-light.webp";
      designImage.src = "images/design-light.webp";
      figmaImage.src = "images/figma-light.webp";
    } else {
      bodyTheme.classList.remove("dark");
      bodyTheme.classList.add("light");
      themeImage.src = "images/moon-icon.webp";
      linkedInImageLanding.src = "images/linkedin-dark.webp";
      linkedInImageContact.src = "images/linkedin-dark.webp";
      githubImageLanding.src = "images/github-dark.webp";
      githubImageContact.src = "images/github-dark.webp";
      htmlImage.src = "images/html-dark.webp";
      cssImage.src = "images/css-dark.webp";
      jsImage.src = "images/js-dark.webp";
      gitImage.src = "images/git-dark.webp";
      designImage.src = "images/design-dark.webp";
      figmaImage.src = "images/figma-dark.webp";
    }
  });
});
