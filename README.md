
**Hello,**

**Welcome to the Sign-In Functionality Test Suite!**

**Assignment Instructions:**

1. Visit the URL. https://magento.softwaretestingboard.com/
2. Navigate to Create an Account.
3. Manually Create an account using fake emails (no authentication needed) and Signout.
4. Navigate to Sign In.
5. Write an automation test for the sign-in functionality under "Registered Customers" in the screen shot above. Include only the test cases which you think should be tested. Be prepared to justify why you included these test cases and excluded others in the team interview.
6. There should be results of test execution with reporting.
7. There should be instructions on how to execute the tests so that we can run it.
8. Make sure you upload your assignment to GitHub and send us the GitHub link and be prepared to run it in the next round.

**Prerequisites:**

Before you start, ensure you have the following requirements in place:

Node.js and npm installed on your machine.
Operating System: <Specify Windows/Linux/Mac> (Note any OS dependencies if applicable).

**Installation:**

Follow these steps to install the project:

Clone the repository:

 git clone https://github.com/YuraYura13/Tech_Assignment_Pathfactory.git

Install project dependencies:

npm install

**Running Tests:**

To run the tests, follow these instructions:

Interactive mode:

npx cypress run --headed

Headless mode:

npx cypress run

**Reporting:**

The test suite generates detailed HTML reports for test runs. You can find these reports in the 'Tech_Assignment_Pathfactory/cypress/reports/html' directory.