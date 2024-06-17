# Test assignment
We are looking for Automation Engineers that have the mindset "only the sky is the limit"
and "automation doesn't stop at testing, it's just a beginning!" ;)

The purpose of this test assignment is to assess the applicant's automation skills, allowing him/her to show the best they can do and how fast they can learn.
It is an open assignment. There is no the right answer and there is no end goal other than proving yourself. Surprise us!

Make sure that you give detailed comments or descriptions of your tests.
When the assignment is complete, please push your solution to Github(Gitlab) and send us the link.
If you have any questions, please contact us back.

Good luck!

PS. We don't expect you to spend weeks (and sleepless nights) on doing it. Lets see how far you can get in 6-10 hours. We want to see how you approach and solve problems.

And you will find the users to login in users.js.

# Description of the project

We are checking the functionality of this application using automation framework Playwright. 
The test scripts are implemented using JavaScript and the Page Object Model(POM) approach.

Prerequisite: Node.js, git, IDE.

1. Install Node.js in your system. Check "node -v" in command prompt to check the installed version.

2. Check "npm -v" to check the npm version.

3. Install playwright in your system ("npm init playwright@latest")

4. Install git on your system to clone (To check use "git -v" in cmd prompt).

5. Once the git is installed open command prompt or git bash enter the code.

6. Install an IDE to view the code properly in your system (VS Code preferred).


To run the test scripts on your local machine from GitHub(Gitlab), please do the following steps:

1. Click on the clone link from the GitHub(Gitlab). All my test scripts are stored in the "tests" folder.

Use this command to clone: git clone "clone link".

2. Once it is cloned give "npm i" in the command prompt inside folder "ABN AMRO assessment" to install all node_modules and dependencies needed.

3. Before running the tests, update the location path of the index.html on this location: /testautomation-web/pages/login_page.js on row 15. The path in the file, login_page.js on row 15 should be work as an hyperlink. See below for an example.

 Use the format as ('file:///Users/ashwin.banwarie/Documents/ABN%20AMRO/testautomation-web/index.html')

4. Once all the dependencies are installed run all the scripts by using the following commands: "npx playwright test"

By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the playwright.config file. Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

For running the the tests in headed mode the following commands can be used:

- For all the tests in headed mode: "npx playwright test --headed"

- For the tests of loginpage in headed mode: "npx playwright test ./tests/loginpage_tests.spec.js --headed"

- For the tests of homepage in headed mode: "npx playwright test ./tests/homepage_tests.spec.js --headed"

5. After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed.

Manually the test reports can be opened by running this command "npx playwright show-report"