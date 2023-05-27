const workSections = [
  {
    headingSecondary: 'Tonic',
    subheading: 'CANOPY',
    develper: 'Back End Dev',
    dot: ' ',
    year: 2015,
    workDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBBY'],
    live: '# ',
    source: '#',
    Image: 'img/tonic1.svg',
    button: 'See my project',
  },
  {
    headingSecondary: 'Multi-Poststories',
    subheading: 'CANOPY',
    develper: 'Back End Dev',
    dot: ' ',
    year: 2015,
    workDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    langs: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBBY'],
    live: '# ',
    source: '#',
    Image: 'img/multistories12.svg',
    button: 'See my project',
  },
  {
    headingSecondary: 'Facebook-360',
    subheading: 'CANOPY',
    develper: 'Back End Dev',
    dot: ' ',
    year: 2015,
    workDescription:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    langs: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBBY'],
    live: '# ',
    source: '#',
    Image: 'img/facebook123.svg',
    button: 'See my project',
  },
  {
    headingSecondary: 'Uber Navigation',
    subheading: 'CANOPY',
    develper: 'Back End Dev',
    dot: '',
    year: 2015,
    workDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    langs: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBBY'],
    live: '# ',
    source: '#',
    Image: 'img/uberNavigation.svg',
    className: 'card1',
    button: 'See my project',
  },
];

const portfolio = document.createElement('div');
portfolio.className = 'work-container';

workSections.forEach((section) => {
  const gridBox = document.createElement('div');
  gridBox.className = 'grid-2-cols';
  const containerImage = document.createElement('div');
  containerImage.classList.add('containerImage', section.className);

  const image = document.createElement('img');
  image.className = 'image-section';
  image.src = section.Image;
  containerImage.appendChild(image);

  const textSection = document.createElement('div');
  textSection.className = 'text-section';

  const pryHeading = document.createElement('h3');
  pryHeading.innerHTML = section.headingSecondary;
  pryHeading.className = 'heading-secondary';

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container-work';

  const subheading = document.createElement('p');
  subheading.innerHTML = section.subheading;
  subheading.className = 'subheading';

  const dot = document.createElement('span');
  dot.innerHTML = section.dot;
  dot.className = 'dot';

  const developer = document.createElement('span');
  developer.innerHTML = section.develper;
  developer.className = 'developer';

  const year = document.createElement('span');
  year.innerHTML = section.year;
  year.className = 'year';

  const workDescription = document.createElement('p');
  workDescription.innerHTML = section.workDescription;
  workDescription.className = 'work-description';

  const ul = document.createElement('ul');
  ul.className = 'langs-app-list';

  const li = document.createElement('li');
  li.className = 'work-section-list';

  const apps = document.createElement('p');
  apps.innerHTML = section.langs;
  apps.className = 'apps';

  const submitBtn = document.createElement('button');
  submitBtn.className = 'btn-work';
  submitBtn.innerHTML = section.button;

  textSection.appendChild(pryHeading);
  textSection.appendChild(textContainer);
  textContainer.appendChild(subheading);
  textContainer.appendChild(dot);
  textContainer.appendChild(developer);
  textContainer.appendChild(year);
  textSection.appendChild(workDescription);
  textSection.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(apps);
  textSection.appendChild(submitBtn);

  portfolio.appendChild(gridBox);
  gridBox.appendChild(containerImage);
  gridBox.appendChild(textSection);
});

const targetElement = document.querySelector('#worksection');
targetElement.appendChild(portfolio);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn-close-modal');
const btnsOpenModal = document.querySelectorAll('.btn-work');

const popupModal = [
  {
    headingSecondary: 'Tonic',
    subheading: 'CANOPY',
    develper: 'Back End Dev',
    dot: ' ',
    year: 2015,
    workDescription:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ipsam facere, eos cum eum sint at accusamus quisquam quod asperiores assumenda dolorem officiis voluptatibus doloribus excepturi, consequuntur consectetur voluptas similique.',
    langs: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBBY'],
    live: '# ',
    source: '#',
    Image: 'img/tonic1.svg',
    button: 'X',
  },
];

const modalContainer = document.createElement('div');
modalContainer.className = 'modal';

popupModal.forEach((popup) => {
  const popupheader = document.createElement('h3');
  popupheader.classList = 'heading-secondary';
  popupheader.innerHTML = popup.headingSecondary;

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container-work';

  const subheading = document.createElement('p');
  subheading.innerHTML = popup.subheading;
  subheading.className = 'subheading';

  const dot = document.createElement('span');
  dot.innerHTML = popup.dot;
  dot.className = 'dot';

  const developer = document.createElement('span');
  developer.innerHTML = popup.develper;
  developer.className = 'developer';

  const year = document.createElement('span');
  year.innerHTML = popup.year;
  year.className = 'year';

  const workDescription = document.createElement('p');
  workDescription.innerHTML = popup.workDescription;
  workDescription.className = 'work-description';

  const containerImage = document.createElement('div');
  containerImage.classList.add('containerImage', section.className);

  const image = document.createElement('img');
  image.className = 'image-section';
  image.src = section.Image;
  containerImage.appendChild(image);
});

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
