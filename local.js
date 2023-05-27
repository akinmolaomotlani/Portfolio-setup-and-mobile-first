const workDescription = document.createElement('p');
workDescription.innerHTML = popup.workDescription;
workDescription.className = 'work-description';

const containerImage = document.createElement('div');
containerImage.classList.add('containerImage', section.className);

const image = document.createElement('img');
image.className = 'image-section';
image.src = section.Image;
containerImage.appendChild(image);
