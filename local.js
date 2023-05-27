const workDescription = document.createElement('p');
workDescription.innerHTML = popup.workDescription;
workDescription.className = 'work-description';

const containerImage = document.createElement('div');
containerImage.classList.add('containerImage', section.className);

const image = document.createElement('img');
image.className = 'image-section';
image.src = section.Image;
containerImage.appendChild(image);

localstorage.forEach((popup) => {
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
