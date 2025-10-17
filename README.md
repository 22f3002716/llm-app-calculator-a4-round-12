# Scientific Calculator

A simple web-based scientific calculator built with HTML, CSS, and TypeScript.

## Features

*   Basic arithmetic operations: addition, subtraction, multiplication, division.
*   Scientific functions: sine, cosine, tangent, square root.
*   Parentheses support for order of operations.
*   Clear (C) button to reset the display.

## How to Run

1.  **Save the files**: Save `index.html`, `logic.ts`, and `logic.js` into the same directory.
2.  **Open `index.html`**: Simply open the `index.html` file in your web browser. There's no need for a web server for this simple application.

## Development Notes

*   The calculator logic is written in TypeScript (`logic.ts`) and compiled into JavaScript (`logic.js`).
*   The `eval()` function is used for calculation. While convenient for simple calculators, direct use of `eval()` can be a security risk if the input is not sufficiently sanitized. For this simple, client-side-only application with basic sanitization, it's acceptable, but it should be avoided in production environments dealing with untrusted input.
*   Trigonometric functions (sin, cos, tan) expect input in radians.

## Compiling TypeScript

If you modify `logic.ts` and want to recompile it to `logic.js`, you'll need the TypeScript compiler (tsc).

1.  **Install TypeScript (if you haven't already)**:
    ```bash
    npm install -g typescript
    ```
2.  **Navigate to the directory** containing `logic.ts` in your terminal.
3.  **Compile the TypeScript file**:
    ```bash
    tsc logic.ts
    ```
    This will generate an updated `logic.js` file.
