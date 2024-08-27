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
  
    const sections = [
      {
        title: 'About Me',
        content: `
          I am a computer science graduate with a strong technical foundation and a passion for innovation. 
          I hold a BSc (Hons) in Computer Science with Artificial Intelligence from the University of Nottingham, 
          where I developed expertise in programming languages, algorithms, and software development. 
          During my studies, I gained hands-on experience through various projects, 
          including Unity game development and image registration for breast cancer tissue staining.
          I have also worked as a Computer Science Intern at QCRI, where I enhanced my Python skills and contributed to backend optimization and frontend development.
          My diverse experiences, such as running my own business and leading a volunteering team, 
          have equipped me with strong project management, problem-solving, and communication skills. 
          Fluent in English and Arabic, with intermediate proficiency in French, 
          I am always eager to embrace new challenges and further expand my skill set.
        `
      },
      {
        title: 'My Projects',
        content: `
          <ul>
            <li><a href="#">Project 1</a></li>
            <li><a href="#">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
          </ul>
        `
      },
      {
        title: 'Contact Me',
        content: `
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        `
      }
    ];
  
    sections.forEach(section => {
      const sectionElement = document.createElement('section');
      sectionElement.classList.add('card');
      
      const h2 = document.createElement('h2');
      h2.textContent = section.title;
      
      const div = document.createElement('div');
      div.innerHTML = section.content;
      
      sectionElement.appendChild(h2);
      sectionElement.appendChild(div);
      
      main.appendChild(sectionElement);
    });
  
    document.body.appendChild(main);
  
    // Create footer
    const footer = document.createElement('footer');
    const footerP = document.createElement('p');
    footerP.innerHTML = '&copy; 2024 My Portfolio. All rights reserved.';
    footer.appendChild(footerP);
    document.body.appendChild(footer);
  });
  