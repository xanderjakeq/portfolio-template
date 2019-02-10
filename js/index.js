const portfolioDiv = document.querySelector('.portfolio')
const worksButton = document.querySelector('.worksButton')

worksButton.addEventListener('click', (e) => {
    portfolioDiv.classList.toggle('active')
})