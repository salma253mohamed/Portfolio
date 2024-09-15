// scripts.js

document.addEventListener("DOMContentLoaded", function() {
  // Create header
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to My Portfolio';
  header.appendChild(h1);
  document.body.appendChild(header);

  // Create navigation
  const nav = document.createElement('nav');
  const navUl = document.createElement('ul');
  const navItems = [
    { text: 'Home', href: '#MainPage.html' },
    { text: 'About', href: '#' },
    { text: 'Projects', href: '#' },
    { text: 'Contact', href: '#' },
  ];

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navUl.appendChild(li);
  });

  nav.appendChild(navUl);
  document.body.appendChild(nav);

  // Create main content
  const main = document.createElement('main');

  const aboutSection = document.createElement('section');
  aboutSection.classList.add('card', 'about-section');

  // Create image element
  const aboutImage = document.createElement('img');
  aboutImage.src = 'cs.jpg';  // Use the uploaded image for the about section
  aboutImage.alt = 'Computer Science Image';

  // Create text content for the about section
  const aboutText = document.createElement('div');
  aboutText.classList.add('about-text');

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = 'About Me';

  const aboutContent = document.createElement('p');
  aboutContent.innerHTML = `
      I am a computer science graduate with a strong technical foundation and a passion for innovation.
      I hold a BSc (Hons) in Computer Science with Artificial Intelligence from the University of Nottingham, 
      where I developed expertise in programming languages, algorithms, and software development. 
      My diverse experiences have equipped me with strong project management, problem-solving, and communication skills. 
      Fluent in English and Arabic, with intermediate proficiency in French, 
      I am always eager to embrace new challenges and further expand my skill set.
  `;

  // Append heading and content to the text div
  aboutText.appendChild(aboutHeading);
  aboutText.appendChild(aboutContent);

  // Append image and text to the section
  aboutSection.appendChild(aboutImage);
  aboutSection.appendChild(aboutText);

  // Append the About Me section to the main content
  main.appendChild(aboutSection);
  
  // Append main content to the body
  document.body.appendChild(main);

  // Create footer
  const footer = document.createElement('footer');
  const footerP = document.createElement('p');
  footerP.innerHTML = '&copy; 2024 My Portfolio. All rights reserved.';
  footer.appendChild(footerP);
  document.body.appendChild(footer);
});
