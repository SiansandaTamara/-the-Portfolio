// Nav Menu
const mobileNavButton = document.getElementById('mobi-menu');
const mobileNav = document.getElementById('menu-modal');
const closeModalButton = document.getElementById('close-modal');
const body = document.querySelector('body');
const navList = document.querySelector('#nav-list');

mobileNavButton.addEventListener('click',() => {
  body.style.overflow = 'hidden';
  mobileNav.style.display = 'block';
});

closeModalButton.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};

navList.onclick = () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'auto';
};



/*project section*/

const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './assets/work1.png',
    technologies: ['html', 'css', 'javascript'],
    stacks: ['CANOPY', 'Back End Dev', '2022'],
    live: 'https://siansandatamara.github.io/portfolio/',
    source: 'https://github.com/SiansandaTamara/portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './assets/work2.png',
    technologies: ['html', 'css', 'javascript'],
    stacks: ['CANOPY', 'Back End Dev', '2022'],
    live: 'https://siansandatamara.github.io/portfolio/',
    source: 'https://github.com/SiansandaTamara/portfolio',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './assets/work3.png',
    technologies: ['html', 'css', 'javascript'],
    stacks: ['CANOPY', 'Back End Dev', '2022'],
    live: 'https://siansandatamara.github.io/portfolio/',
    source: 'https://github.com/SiansandaTamara/portfolio',
  },
  {
    id: 4,
    name: 'Uber Navigator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './assets/work4.png',
    technologies: ['html', 'css', 'javascript'],
    stacks: ['CANOPY', 'Back End Dev', '2022'],
    live: 'https://siansandatamara.github.io/portfolio/',
    source: 'https://github.com/SiansandaTamara/portfolio',
  },
];

// Project View
const projectView = document.getElementById('project-view');
const mainBody = document.querySelector('body');

const viewProject = ({ target }) => {
  const project = projects.find((e) => e.id === parseInt(`${target.id}`, 10));

  const card = document.createElement('div');
  card.classList.add('main-view');

  const body = document.createElement('div');
  body.classList.add('project-view');

  const header = document.createElement('div');
  header.classList.add('title');

  const title = document.createElement('h4');
  title.classList.add('work-title');
  title.innerText = project.name;
  header.appendChild(title);

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('close-modal');
  closeButton.onclick = () => {
    projectView.style.display = 'none';
    mainBody.style.overflow = 'auto';
    projectView.innerHTML = '';
  };

  const icon = '<svg version=\'1.1\' width=\'15\' height=\'15\' viewBox=\'0 0 17 17\'> <g></g> <path d=\'M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z\' fill=\'#67798E\' /></svg>';
  closeButton.innerHTML = icon;
  header.appendChild(closeButton);

  body.appendChild(header);

  const stacks = document.createElement('ul');
  stacks.classList.add('work-details');

  project.stacks.forEach((stack, i) => {
    const list = document.createElement('li');
    const icon = '<svg width=\'8\' height=\'8\' viewBox=\'0 0 8 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'4\' cy=\'4\' r=\'4\' fill=\'#C1C7D0\' /></svg>';

    if (i % 2 === 1) {
      const list = document.createElement('li');
      list.innerHTML = icon;
      stacks.append(list);
    }

    list.innerText = stack;
    stacks.appendChild(list);

    if (i + 1 < project.stacks.length && i % 2 === 1) {
      const list = document.createElement('li');
      list.innerHTML = icon;
      stacks.append(list);
    }
  });
  body.appendChild(stacks);

  const img = document.createElement('img');
  img.classList.add('work-image');
  img.alt = project.name;
  img.src = project.featuredImage;
  body.appendChild(img);

  const details = document.createElement('div');
  details.classList.add('details');

  const description = document.createElement('p');
  description.classList.add('work-des');
  description.innerText = project.description;
  details.appendChild(description);

  const col2 = document.createElement('div');
  col2.classList.add('col2');

  const techs = document.createElement('ul');
  techs.classList.add('work-langs');

  project.technologies.forEach((tech) => {
    const list = document.createElement('li');
    list.innerText = tech;
    techs.appendChild(list);
  });
  col2.appendChild(techs);

  const action = document.createElement('div');
  action.classList.add('action');

  col2.appendChild(action);

  const liveButton = document.createElement('button');
  liveButton.type = 'button';
  liveButton.classList.add('see-more');
  const seeMore = '<p class=\'text\'>See Live</p><svg width=\'15\' height=\'15\' viewBox=\'0 0 18 18\'><path fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z\'/></svg>';
  liveButton.innerHTML = seeMore;
  liveButton.onclick = () => {
    window.open(project.live, '_blank').focus();
  };
  action.appendChild(liveButton);

  const srcButton = document.createElement('button');
  srcButton.type = 'button';
  srcButton.classList.add('see-more');
  const src = '<p class=\'text\'>See Source</p><svg width=\'15\' height=\'15\' viewBox=\'0 0 18 18\'><path d=\'M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z\'/></svg>';
  srcButton.innerHTML = src;
  srcButton.onclick = () => {
    window.open(project.source, '_blank').focus();
  };
  action.appendChild(srcButton);

  details.appendChild(col2);

  body.appendChild(details);

  card.appendChild(body);

  projectView.appendChild(card);

  projectView.style.display = 'flex';
  mainBody.style.overflow = 'hidden';
};

const renderProjects = () => {
  // Renderall project
  const projectSection = document.getElementById('portoflio');

  projects.forEach((row, i) => {
    // create card
    const card = document.createElement('div');
    card.classList.add('work');

    // create image
    const img = document.createElement('img');
    img.classList.add('work-image');
    img.alt = row.name;
    img.src = row.featuredImage;
    card.appendChild(img);

    // create details
    const details = document.createElement('div');
    details.classList.add('work-discription');

    // create title
    const title = document.createElement('h2');
    title.classList.add('work-title');
    title.innerText = row.name;
    details.appendChild(title);

    // create stack list
    const stacks = document.createElement('ul');
    stacks.classList.add('work-details');

    row.stacks.forEach((stack, i) => {
      const list = document.createElement('li');
      const icon = '<svg width=\'8\' height=\'8\' viewBox=\'0 0 8 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'4\' cy=\'4\' r=\'4\' fill=\'#C1C7D0\' /></svg>';

      if (i % 2 === 1) {
        const list = document.createElement('li');
        list.innerHTML = icon;
        stacks.append(list);
      }

      list.innerText = stack;
      stacks.appendChild(list);

      if (i + 1 < row.stacks.length && i % 2 === 1) {
        const list = document.createElement('li');
        list.innerHTML = icon;
        stacks.append(list);
      }
    });

    details.appendChild(stacks);

    const description = document.createElement('p');
    description.classList.add('work-des');
    description.innerText = row.description;
    details.appendChild(description);

    // create techs list
    const techs = document.createElement('ul');
    techs.classList.add('work-langs');

    row.technologies.forEach((tech) => {
      const list = document.createElement('li');
      list.innerText = tech;
      techs.appendChild(list);
    });

    details.appendChild(techs);

    // add details to card
    card.appendChild(details);

    if (i % 2 === 1) {
      card.classList.add('reverse-order');
    }

    const seeMore = document.createElement('button');
    seeMore.classList.add('see-more');
    seeMore.innerText = 'See More';
    seeMore.id = row.id;

    seeMore.onclick = viewProject;
    details.appendChild(seeMore);

    // add card to project
    projectSection.appendChild(card);
  });
};

renderProjects();
