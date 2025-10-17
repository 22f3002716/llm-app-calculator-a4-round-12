let currentInput: string = '0';
let displayElement: HTMLInputElement | null;

document.addEventListener('DOMContentLoaded', () => {
    displayElement = document.getElementById('display') as HTMLInputElement;
    if (displayElement) {
        displayElement.value = currentInput;
    }
});

function updateDisplay(): void {
    if (displayElement) {
        displayElement.value = currentInput;
    }
}

function appendValue(value: string): void {
    if (currentInput === '0' && !['.', 'sin(', 'cos(', 'tan(', 'sqrt('].includes(value)) {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay(): void {
    currentInput = '0';
    updateDisplay();
}

function calculate(): void {
    try {
        // Basic sanitization to prevent direct eval injection of arbitrary functions
        // This is not foolproof for dedicated attackers but helps for common mistakes
        let sanitizedInput = currentInput.replace(/[^-+*/().0-9eEsincoqrtmhaM]/g, '');

        // Replace common functions for eval
        sanitizedInput = sanitizedInput.replace(/sin\(/g, 'Math.sin(');
        sanitizedInput = sanitizedInput.replace(/cos\(/g, 'Math.cos(');
        sanitizedInput = sanitizedInput.replace(/tan\(/g, 'Math.tan(');
        sanitizedInput = sanitizedInput.replace(/sqrt\(/g, 'Math.sqrt(');

        // Convert degrees to radians for trigonometric functions, if applicable
        // For simplicity, assuming these functions expect radians.
        // A more advanced calculator might have a deg/rad toggle.

        const result = eval(sanitizedInput);
        currentInput = result.toString();
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
}

// Expose functions globally for HTML access
(window as any).appendValue = appendValue;
(window as any).clearDisplay = clearDisplay;
(window as any).calculate = calculate;
