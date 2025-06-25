document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.questions').forEach((question) => {
        const plusIcon = question.querySelector('.icon-plus');
        const minusIcon = question.querySelector('.icon-minus');
        const answer = question.querySelector('.answer');
        const headerText = question.querySelector('h3');

        // Plus opens
        plusIcon.addEventListener('click', () => {
            answer.classList.remove('hidden');
            plusIcon.classList.add('hidden');
            minusIcon.classList.remove('hidden');
        });

        // Minus closes
        minusIcon.addEventListener('click', () => {
            answer.classList.add('hidden');
            minusIcon.classList.add('hidden');
            plusIcon.classList.remove('hidden');
        });

        // h3 toggles
        headerText.addEventListener('click', () => {
            const isHidden = answer.classList.contains('hidden');

            if (isHidden) {
                answer.classList.remove('hidden');
                plusIcon.classList.add('hidden');
                minusIcon.classList.remove('hidden');
            } else {
                answer.classList.add('hidden');
                minusIcon.classList.add('hidden');
                plusIcon.classList.remove('hidden');
            }
        });
    });
});


// document.querySelectorAll('.questions').forEach((question) => {
//     const plusIcon = question.querySelector('.icon-plus');
//     const minusIcon = question.querySelector('.icon-minus');
//     const answer = question.querySelector('.answer');
//     const headerText = question.querySelector('h3');
  
//     function toggleAccordion() {
//       const isHidden = answer.classList.contains('hidden');
//       answer.classList.toggle('hidden');
//       plusIcon.classList.toggle('hidden', !isHidden);
//       minusIcon.classList.toggle('hidden', isHidden);
//     }
  
//     plusIcon.addEventListener('click', toggleAccordion);
//     minusIcon.addEventListener('click', toggleAccordion);
//     headerText.addEventListener('click', toggleAccordion);
//   });
  
