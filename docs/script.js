document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmiForm');
    const weightInput = document.getElementById('weight');
    const weightUnit = document.getElementById('weightUnit');
    const heightInput = document.getElementById('height');
    const heightUnit = document.getElementById('heightUnit');
    const heightWrapper = document.getElementById('heightWrapper');
    const ftInWrapper = document.getElementById('ftInWrapper');
    const feetInput = document.getElementById('feet');
    const inchesInput = document.getElementById('inches');
    const backToMetricBtn = document.getElementById('backToMetric');

    const resultContainer = document.getElementById('result');
    const bmiValueEl = document.getElementById('bmiValue');
    const bmiCategoryEl = document.getElementById('bmiCategory');
    const bmiMessageEl = document.getElementById('bmiMessage');

    // Toggle Height Inputs
    heightUnit.addEventListener('change', (e) => {
        if (e.target.value === 'ft') {
            heightWrapper.classList.add('hidden');
            ftInWrapper.classList.remove('hidden');
        } else {
            heightWrapper.classList.remove('hidden');
            ftInWrapper.classList.add('hidden');
        }
    });

    backToMetricBtn.addEventListener('click', () => {
        heightUnit.value = 'm';
        heightWrapper.classList.remove('hidden');
        ftInWrapper.classList.add('hidden');
    });

    // Calculate BMI
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let weight = parseFloat(weightInput.value);
        let height = 0;

        // Convert Weight to kg
        if (weightUnit.value === 'lbs') {
            weight = weight * 0.453592;
        }

        // Convert Height to meters
        if (heightUnit.value === 'm') {
            height = parseFloat(heightInput.value);
        } else if (heightUnit.value === 'cm') {
            height = parseFloat(heightInput.value) / 100;
        } else if (heightUnit.value === 'ft') {
            const feet = parseFloat(feetInput.value) || 0;
            const inches = parseFloat(inchesInput.value) || 0;
            height = (feet * 0.3048) + (inches * 0.0254);
        }

        if (weight > 0 && height > 0) {
            const bmi = weight / (height * height);
            displayResult(bmi);
        } else {
            alert('Please enter valid positive numbers.');
        }
    });

    function displayResult(bmi) {
        resultContainer.classList.remove('hidden');

        // Animate the number
        let current = 0;
        const target = bmi;
        const step = target / 20;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            bmiValueEl.textContent = current.toFixed(2);
        }, 20);

        // Determine Category
        let category = '';
        let message = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            message = 'Time to grab a bite! Eat more nutritious food.';
            color = '#facc15'; // Yellow
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal Weight';
            message = 'Great job! Keep maintaining your healthy lifestyle.';
            color = '#4ade80'; // Green
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            message = 'Consider exercising more and watching your diet.';
            color = '#fb923c'; // Orange
        } else {
            category = 'Obese';
            message = 'Please consult a healthcare provider for advice.';
            color = '#f87171'; // Red
        }

        bmiCategoryEl.textContent = category;
        bmiCategoryEl.style.color = color;
        bmiMessageEl.textContent = message;

        // Re-trigger animation
        resultContainer.style.animation = 'none';
        resultContainer.offsetHeight; /* trigger reflow */
        resultContainer.style.animation = 'slideDown 0.5s ease-out';
    }
});
