// Game State Management
class GameState {
    constructor() {
        this.currentScenarioIndex = 0;
        this.score = 0;
        this.maxScore = 0;
        this.answers = [];
        this.selectedOption = null;
    }

    reset() {
        this.currentScenarioIndex = 0;
        this.score = 0;
        this.maxScore = 0;
        this.answers = [];
        this.selectedOption = null;
    }

    recordAnswer(scenarioId, selectedIndex, isCorrect, pointsEarned) {
        this.answers.push({
            scenarioId,
            selectedIndex,
            isCorrect,
            pointsEarned
        });
        this.score += pointsEarned;
        this.maxScore += 3; // Max points per question
    }

    getPercentage() {
        return this.maxScore > 0 ? Math.round((this.score / this.maxScore) * 100) : 0;
    }

    getPerformanceLevel() {
        const percentage = this.getPercentage();
        if (percentage >= 90) return 'mastery';
        if (percentage >= 75) return 'proficient';
        if (percentage >= 60) return 'developing';
        return 'needs-practice';
    }

    getGapBreakdown() {
        const breakdown = {
            'Accountability': { score: 0, max: 0 },
            'Over-Privilege': { score: 0, max: 0 },
            'Delegation / Impersonation': { score: 0, max: 0 },
            'Last Mile Access': { score: 0, max: 0 }
        };

        this.answers.forEach((answer, index) => {
            const scenario = scenarios[index];
            const gap = scenario.gap;
            breakdown[gap].score += answer.pointsEarned;
            breakdown[gap].max += 3;
        });

        return breakdown;
    }
}

// Initialize game state
const gameState = new GameState();

// DOM Elements
const screens = {
    start: document.getElementById('startScreen'),
    question: document.getElementById('questionScreen'),
    feedback: document.getElementById('feedbackScreen'),
    results: document.getElementById('resultsScreen')
};

const elements = {
    // Progress
    progressSection: document.getElementById('progressSection'),
    progressText: document.getElementById('progressText'),
    scoreText: document.getElementById('scoreText'),
    progressFill: document.getElementById('progressFill'),
    
    // Question Screen
    gapBadge: document.getElementById('gapBadge'),
    scenarioText: document.getElementById('scenarioText'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    submitButton: document.getElementById('submitButton'),
    
    // Feedback Screen
    feedbackHeader: document.getElementById('feedbackHeader'),
    feedbackIcon: document.getElementById('feedbackIcon'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackText: document.getElementById('feedbackText'),
    learningPointsSection: document.getElementById('learningPointsSection'),
    learningPointsList: document.getElementById('learningPointsList'),
    nextButton: document.getElementById('nextButton'),
    
    // Results Screen
    finalScore: document.getElementById('finalScore'),
    totalScore: document.getElementById('totalScore'),
    levelBadge: document.getElementById('levelBadge'),
    levelDescription: document.getElementById('levelDescription'),
    gapBreakdown: document.getElementById('gapBreakdown'),
    nextStepsList: document.getElementById('nextStepsList'),
    
    // Buttons
    startButton: document.getElementById('startButton'),
    restartButton: document.getElementById('restartButton'),
    reviewButton: document.getElementById('reviewButton')
};

// Screen Management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
    
    // Show/hide progress section
    if (screenName === 'start' || screenName === 'results') {
        elements.progressSection.style.display = 'none';
    } else {
        elements.progressSection.style.display = 'block';
    }
}

// Update Progress
function updateProgress() {
    const current = gameState.currentScenarioIndex + 1;
    const total = scenarios.length;
    const percentage = (current / total) * 100;
    
    elements.progressText.textContent = `Scenario ${current} of ${total}`;
    elements.scoreText.textContent = `Score: ${gameState.score}/${gameState.maxScore}`;
    elements.progressFill.style.width = `${percentage}%`;
}

// Load Scenario
function loadScenario() {
    const scenario = scenarios[gameState.currentScenarioIndex];
    gameState.selectedOption = null;
    
    // Update gap badge
    elements.gapBadge.textContent = scenario.gap;
    elements.gapBadge.className = 'gap-badge ' + getGapClass(scenario.gap);
    
    // Update scenario text
    elements.scenarioText.textContent = scenario.scenario;
    elements.questionText.textContent = scenario.question;
    
    // Create options
    elements.optionsContainer.innerHTML = '';
    scenario.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)})</span>
            <span class="option-text">${option.text}</span>
        `;
        optionDiv.addEventListener('click', () => selectOption(index));
        elements.optionsContainer.appendChild(optionDiv);
    });
    
    // Disable submit button
    elements.submitButton.disabled = true;
    
    // Update progress
    updateProgress();
    
    // Show question screen
    showScreen('question');
}

// Get Gap CSS Class
function getGapClass(gap) {
    const classMap = {
        'Accountability': 'accountability',
        'Over-Privilege': 'over-privilege',
        'Delegation / Impersonation': 'delegation',
        'Last Mile Access': 'last-mile'
    };
    return classMap[gap] || '';
}

// Select Option
function selectOption(index) {
    gameState.selectedOption = index;
    
    // Update UI
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    
    // Enable submit button
    elements.submitButton.disabled = false;
}

// Submit Answer
function submitAnswer() {
    const scenario = scenarios[gameState.currentScenarioIndex];
    const selectedOption = scenario.options[gameState.selectedOption];
    const isCorrect = gameState.selectedOption === scenario.correctIndex;
    const pointsEarned = selectedOption.score;
    
    // Record answer
    gameState.recordAnswer(
        scenario.id,
        gameState.selectedOption,
        isCorrect,
        pointsEarned
    );
    
    // Show feedback
    showFeedback(scenario, selectedOption, isCorrect);
}

// Show Feedback
function showFeedback(scenario, selectedOption, isCorrect) {
    // Update header
    if (isCorrect) {
        elements.feedbackHeader.className = 'feedback-header correct';
        elements.feedbackIcon.textContent = '✓';
        elements.feedbackTitle.textContent = selectedOption.score === 3 ? 'Excellent!' : 'Correct!';
    } else {
        elements.feedbackHeader.className = 'feedback-header incorrect';
        elements.feedbackIcon.textContent = '✗';
        elements.feedbackTitle.textContent = 'Not Quite';
    }
    
    // Update feedback text
    elements.feedbackText.textContent = selectedOption.feedback;
    
    // Show learning points only for correct answers
    if (isCorrect && scenario.learningPoints) {
        elements.learningPointsSection.style.display = 'block';
        elements.learningPointsList.innerHTML = '';
        scenario.learningPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            elements.learningPointsList.appendChild(li);
        });
    } else {
        elements.learningPointsSection.style.display = 'none';
    }
    
    // Update next button text
    if (gameState.currentScenarioIndex < scenarios.length - 1) {
        elements.nextButton.textContent = 'Next Scenario';
    } else {
        elements.nextButton.textContent = 'See Results';
    }
    
    // Show feedback screen
    showScreen('feedback');
}

// Next Scenario
function nextScenario() {
    gameState.currentScenarioIndex++;
    
    if (gameState.currentScenarioIndex < scenarios.length) {
        loadScenario();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    // Update score
    elements.finalScore.textContent = gameState.score;
    elements.totalScore.textContent = gameState.maxScore;
    
    // Update performance level
    const level = gameState.getPerformanceLevel();
    const percentage = gameState.getPercentage();
    
    elements.levelBadge.textContent = getLevelText(level);
    elements.levelBadge.className = 'level-badge ' + level;
    elements.levelDescription.textContent = getLevelDescription(level, percentage);
    
    // Show gap breakdown
    const breakdown = gameState.getGapBreakdown();
    elements.gapBreakdown.innerHTML = '';
    
    Object.entries(breakdown).forEach(([gap, data]) => {
        const div = document.createElement('div');
        div.className = 'gap-result';
        div.innerHTML = `
            <span class="gap-result-name">${gap}</span>
            <span class="gap-result-score">${data.score}/${data.max}</span>
        `;
        elements.gapBreakdown.appendChild(div);
    });
    
    // Show next steps
    elements.nextStepsList.innerHTML = '';
    const nextSteps = getNextSteps(level);
    nextSteps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        elements.nextStepsList.appendChild(li);
    });
    
    // Show results screen
    showScreen('results');
}

// Get Level Text
function getLevelText(level) {
    const texts = {
        'mastery': 'Mastery',
        'proficient': 'Proficient',
        'developing': 'Developing',
        'needs-practice': 'Needs Practice'
    };
    return texts[level];
}

// Get Level Description
function getLevelDescription(level, percentage) {
    const descriptions = {
        'mastery': `Outstanding! You scored ${percentage}%. You have a strong grasp of articulating business risk and impact. You're ready to have confident customer conversations.`,
        'proficient': `Great work! You scored ${percentage}%. You understand how to connect gaps to business impact. With a bit more practice, you'll be at mastery level.`,
        'developing': `Good effort! You scored ${percentage}%. You're on the right track, but focus on making your impact statements more specific and urgent.`,
        'needs-practice': `You scored ${percentage}%. This is a learning opportunity. Review the feedback carefully and try again to strengthen your skills.`
    };
    return descriptions[level];
}

// Get Next Steps
function getNextSteps(level) {
    const steps = {
        'mastery': [
            'Practice these skills in real customer conversations',
            'Help coach other team members on impact articulation',
            'Identify 1-2 target accounts to apply these techniques'
        ],
        'proficient': [
            'Review scenarios where you lost points',
            'Practice articulating impact with specific consequences',
            'Try the exercise again to reach mastery level'
        ],
        'developing': [
            'Focus on connecting gaps to specific business consequences',
            'Use concrete examples and quantifiable impacts',
            'Review the learning points from correct answers',
            'Retake the training to improve your score'
        ],
        'needs-practice': [
            'Review the ARS Workshop materials',
            'Study the feedback for each scenario carefully',
            'Focus on the "why it matters" framework: Gap → Risk → Impact',
            'Retake the training after reviewing the concepts'
        ]
    };
    return steps[level];
}

// Start Game
function startGame() {
    gameState.reset();
    loadScenario();
}

// Restart Game
function restartGame() {
    gameState.reset();
    showScreen('start');
}

// Review Answers (Future feature - for now just restart)
function reviewAnswers() {
    // Future: Show a review screen with all answers
    // For now, just restart
    restartGame();
}

// Event Listeners
elements.startButton.addEventListener('click', startGame);
elements.submitButton.addEventListener('click', submitAnswer);
elements.nextButton.addEventListener('click', nextScenario);
elements.restartButton.addEventListener('click', restartGame);
elements.reviewButton.addEventListener('click', reviewAnswers);

// Initialize
showScreen('start');

// Made with Bob
