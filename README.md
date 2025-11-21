# BMI Calculator Project

This project is a premium, web-based Body Mass Index (BMI) calculator that evolved from a simple Python script into a fully responsive web application hosted on GitHub Pages.

## Project Evolution & Development Log

This section documents the conversation and development steps taken to build this application.

### 1. Initial Request: Basic BMI Check
**User:** "can you please check bmi of a user if the weight is 78"
**Action:**
- Located existing `script.py`.
- Identified need for height input.
- **User Input:** Height: 6ft, Weight: 108kg.
- **Result:** Calculated BMI ~32.29 (Obese).

### 2. Feature Request: Multi-Unit Support
**User:** "can you edit & update the script to support all type of units available in heihgt and weight."
**Action:**
- Updated `script.py` to accept:
    - Weight: `kg`, `lbs`
    - Height: `m`, `cm`, `ft` (feet + inches)
- Implemented conversion logic (lbs -> kg, ft/in -> m).

### 3. Transformation: Web Application
**User:** "can i publish this app online"
**Action:**
- Created a `web_dist` folder.
- Built `index.html` with a premium glassmorphism design.
- Created `style.css` for modern UI styling.
- Ported Python logic to `script.js` for client-side calculation.
- Previewed locally via `python3 -m http.server`.

### 4. Deployment: GitHub Pages
**User:** "I'd prefer option B [GitHub Pages]. can you help with this."
**Action:**
- Moved web files to `docs/` folder (standard for GitHub Pages).
- Configured `.gitignore`.
- Pushed code to `bmi_report` branch.
- **Instruction:** User enabled GitHub Pages in repo settings pointing to `/docs`.

### 5. Bug Fix: Height Dropdown Alignment
**User:** "Height unit of measurement dropdown UI doesnt align properly..."
**Action:**
- Refactored `index.html` and `style.css`.
- Created a `combined-wrapper` to keep inputs and dropdowns aligned.
- Fixed layout shifting when switching between Meter/CM and Feet/Inches.

### 6. Feature Request: Age & Gender
**User:** "can you please add agender and age feature... Also any other relevant option"
**Action:**
- Added **Age** (number) and **Gender** (dropdown) inputs.
- Updated `script.js` to provide personalized result messages based on age and gender (e.g., "As a 25-year-old Male...").

### 7. UI Polish: Consistent Height Tab
**User:** "can you alter the height tab to match weight dropdown UI"
**Action:**
- Reverted Height input to use the standard `input-wrapper` style to match Weight exactly.
- Ensured the unit dropdown is embedded inside the pill shape.
- Added a "Back to Metric" (↺) button for the Feet/Inches view.

---

## How to Run Locally
1. Clone the repo.
2. Open `docs/index.html` in your browser.

## Live Demo
[https://akbardev.github.io/bmicalculator/](https://akbardev.github.io/bmicalculator/)