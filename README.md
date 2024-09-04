# myCalculatorApp
My calculator app written in TS plus a short Playwright test framework 

1. I had to start my own server to open index.html, here are my steps:
- in the terminal go to the project's directory
- npm install -g http-server
- http-server -c-1
- open the link provided in the response - it should have the app pulled up
- use this link as a URL parameter in the tests

2. Use this command in your VSCode terminal to run the test file: npx playwright test tests/tests.spec.ts

Note:
this is my first project in TS, I have started learning it a few days before the intreview, please keep this in mind if you see issues related to that. However, I continue learning TS! This project will get better overtime, with the UI perfected, tests added, and functions improved.
