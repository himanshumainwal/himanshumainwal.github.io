const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((faqQuestion, index) => {
    faqQuestion.addEventListener('click', () => toggleFaqDisplay(index));
});

function toggleFaqDisplay(faqIndex) {
    const allFaqAnswers = document.querySelectorAll('.faq-ans');
    const allPlusIcons = document.querySelectorAll('.fa-plus');
    const allCrossIcons = document.querySelectorAll('.fa-xmark');

    allFaqAnswers.forEach((faqAnswer, index) => {
        faqAnswer.style.display = (index === faqIndex && faqAnswer.style.display !== 'block') ? 'block' : 'none';
    });

    allPlusIcons.forEach((plusIcon, index) => {
        plusIcon.style.display = (index === faqIndex && plusIcon.style.display !== 'none') ? 'none' : 'block';
    });

    allCrossIcons.forEach((crossIcon, index) => {
        crossIcon.style.display = (index === faqIndex && crossIcon.style.display !== 'block') ? 'block' : 'none';
    });
}
