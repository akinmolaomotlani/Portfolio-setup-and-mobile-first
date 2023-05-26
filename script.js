const btnMobileNav = document.querySelector('.btn-mobile-nav');
const headerNav = document.querySelector('.header');

btnMobileNav.addEventListener('click', () => {
  headerNav.classList.toggle('nav-open');
});

const workSections = {
  headingSecondary: 'Tonic',
  subheading: 'CANOPY',
  develper: 'Back End Dev',
  dot: '#x2022',
  year: 2015,
  workDescription:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptate, beatae nam eum doloribus in quo repellat odio omnis officia, quos ea eius cupiditate veritatis quaerat totam optio, dolorem ex!',
  langs: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBBY'],
  live: '# ',
  source:
    'https://github.com/akinmolaomotlani/Portfolio-setup-and-mobile-first',
  Image: './img/snapshot.png',
};
document.getElementById('modal').innerHTML = `  
<div class="header-popup">
<h3 class="heading-secondary">Multi-PostStories</h3> 
<button class="btn-close-modal"> &times;</button>
</div>

<nav class="languages-apps-box">
  <ul class="langs-app-list">
     <li class="work-section-list"><p class="apps">${workSections.langs[0]}</p></li>
     </ul>
     <ul class="langs-app-list">
      <li class="work-section-list"><p class="apps">${workSections.langs[1]}</p></li>
      </ul>
      <ul class="langs-app-list">
      <li class="work-section-list"><p class="apps">${workSections.langs[2]}</p></li>
  </ul>
</nav>
<div class="img-txt-div">
<div img-modal-div>
 <div class="img-box">
  <img class="img-modal" src="img/Snapshoot Portfolio.svg1.svg" alt="">
 </div>

   <div class="mobile-img-box">
    <img class="img-mobile" src="img/Snapshoot Portfolio.1.png" alt="">
  </div>
</div>

<div class="text-modal-div">
<p class="work-description">
 ${workSections.workDescription}
</p>
<p class="work-description">
 ${workSections.workDescription}
</p>

<button class="btn-modal-source">Source</button>
</div>
</div>

`;
