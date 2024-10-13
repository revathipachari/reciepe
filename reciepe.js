// Toggle visibility of the Ingredients
function toggleIngredients() {
    const ingredients = document.getElementById("ingredients");
    ingredients.classList.toggle("hidden");
}

// Toggle visibility of the Steps
function toggleSteps() {
    const steps = document.getElementById("steps");
    steps.classList.toggle("hidden");
}

let currentStep = 0; // Track the current step

// Start Cooking: Highlight the first step
function startCooking() {
    currentStep = 0;
    highlightStep();
    updateProgress();
}

// Highlight the current step
function highlightStep() {
    const steps = document.querySelectorAll("#steps li");
    steps.forEach((step, index) => {
        step.style.backgroundColor = index === currentStep ? "#e2b497" : "transparent";
    });
}

// Move to the next step and update progress
function nextStep() {
    const steps = document.querySelectorAll("#steps li");
    if (currentStep < steps.length - 1) {
        currentStep++;
        highlightStep();
        updateProgress();
    }
}

// Update progress bar based on the current step
function updateProgress() {
    const steps = document.querySelectorAll("#steps li");
    const progress = document.getElementById("progress");
    const progressWidth = ((currentStep + 1) / steps.length) * 100;
    progress.style.width = progressWidth + "%";
}
