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
      themeImage.src = "images/sun-icon.png";
      linkedInImageLanding.src = "images/linkedin-light.png";
      linkedInImageContact.src = "images/linkedin-light.png";
      githubImageLanding.src = "images/github-light.png";
      githubImageContact.src = "images/github-light.png";
      htmlImage.src = "images/html-light.png";
      cssImage.src = "images/css-light.png";
      jsImage.src = "images/js-light.png";
      gitImage.src = "images/git-light.png";
      designImage.src = "images/design-light.png";
      figmaImage.src = "images/figma-light.png";
    } else {
      bodyTheme.classList.remove("dark");
      bodyTheme.classList.add("light");
      themeImage.src = "images/moon-icon.png";
      linkedInImageLanding.src = "images/linkedin-dark.png";
      linkedInImageContact.src = "images/linkedin-dark.png";
      githubImageLanding.src = "images/github-dark.png";
      githubImageContact.src = "images/github-dark.png";
      htmlImage.src = "images/html-dark.png";
      cssImage.src = "images/css-dark.png";
      jsImage.src = "images/js-dark.png";
      gitImage.src = "images/git-dark.png";
      designImage.src = "images/design-dark.png";
      figmaImage.src = "images/figma-dark.png";
    }
  });
});
