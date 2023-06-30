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

const portiforlio = document.createElement('div');

workSections.forEach((section) => {
  const textSection = document.createElement('div');
  const headingSecondary = document.createElement('h3');
  headingSecondary.className = 'heading-secondary';
  headingSecondary.textContent = section.headingSecondary;
  textSection.appendChild(headingSecondary);

  // subheading box

  const subHeading = document.createElement('h5');
  subHeading.className = 'subheading';
  subHeading.textContent = section.subheading;

  const developer = document.createElement('p');
  developer.textContent = section.developer;
  developer.className = 'developer';

  const dot = document.createElement('div');
  dot.textContent = '.';
  dot.className = 'dot';

  const year = document.createElement('p');
  year.textContent = section.year;
  year.className = 'year';

  const subTextSection = document.createElement('div');
  subTextSection.className = 'sub-text-section';
  subTextSection.appendChild(subHeading);
  subTextSection.appendChild(dot);
  subTextSection.appendChild(developer);
  subTextSection.appendChild(year);
  textSection.appendChild(subTextSection);

  // work description
  const workDescription = document.createElement('p');
  workDescription.textContent = section.workDescription;
  workDescription.className = 'work-description';
  textSection.appendChild(workDescription);

  // languages

  const lang1 = document.createElement('p');
  lang1.textContent = section.langs[0];

  const lang2 = document.createElement('p');
  lang2.textContent = section.langs[1];

  const lang3 = document.createElement('p');
  lang3.textContent = section.langs[2];

  const lang4 = document.createElement('p');
  lang4.textContent = section.langs[3];

  const languagesBox = document.createElement('div');
  languagesBox.className = 'languages-box';

  languagesBox.appendChild(lang1);
  languagesBox.appendChild(lang2);
  languagesBox.appendChild(lang3);
  languagesBox.appendChild(lang4);
  textSection.appendChild(languagesBox);

  // button

  const button = document.createElement('button');
  button.className = 'see-project-btn';
  button.textContent = section.button;
  textSection.appendChild(button);

  // image container
  const image = document.createElement('img');
  image.src = section.Image;
  image.className = 'work-img';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';
  imageContainer.appendChild(image);

  let gridBox = document.createElement('div');
  gridBox.className = 'grid-2-cols';
  gridBox.appendChild(imageContainer);
  gridBox.appendChild(textSection);
  portiforlio.appendChild(gridBox);
});

const workSection = document.getElementById('worksection');
workSection.appendChild(portiforlio);

const popUp = document.createElement('div');
popUp.className = 'popup-page';

let paragraph = document.createElement('p');
paragraph.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae consequatur itaque nobis quae minus quidem praesentium pariatur tenetur excepturi sint perspiciatis voluptatibus quibusdam unde consectetur, quia dignissimos delectus cum?';
paragraph.className = 'paragraph';
popUp.appendChild(paragraph);
workSection.appendChild(popUp);

let closeButton = document.createElement('button');
closeButton.className = 'btn-close';
closeButton.textContent = 'X';
popUp.appendChild(closeButton);

let btnOpen = document.querySelectorAll('.see-project-btn');
let closeBtn = document.querySelector('.btn-close');
let popUpPage = document.querySelector('.popup-page');

workSection.addEventListener('click', openWindow);
function openWindow() {
  popUpPage.classList.add('show');
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  popUpPage.classList.remove('show');
}
