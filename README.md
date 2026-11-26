
# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is an interactive budgeting application that helps users manage their money by setting a budget, recording expenses, and monitoring their remaining balance.

## Improvements Made This Week

This week, I improved SpendWise by adding JavaScript functionality.

The application now allows users to:
- Set their total budget.
- Add multiple expenses.
- Select expense categories.
- Calculate total expenses automatically.
- Display the remaining balance.
- Receive feedback when they exceed their budget.
- View their expense history.

## 1. Conditional Statements

I used if, else if, and else statements to make decisions.

For example:
- If the budget is invalid, the application displays an error message.
- If expenses exceed the budget, a warning is displayed.
- If the remaining balance is zero, the application informs the user.
- If the user is within the budget, a success message is displayed.

## 2. Arrays

I used an array called expenses to store multiple expense records.

Each expense contains:
- Expense name
- Expense amount
- Expense category

The push() method adds new expenses to the array.

## 3. Loops

I used for loops to process all stored expenses.

The loops calculate the total expenses and display all expense records on the webpage.

## 4. DOM Manipulation

I used JavaScript DOM manipulation to update the webpage dynamically.

Examples include:
- getElementById()
- textContent
- createElement()
- appendChild()
- innerHTML

These methods allow the application to display updated budget information and expense records without refreshing the page.

## 5. Event Listeners

I used addEventListener() to handle user interactions.

The application responds when:
- The user clicks the Set Budget button.
- The user submits the expense form.

I also used preventDefault() to stop the form from refreshing the webpage.

## 6. Challenges and Solutions

One challenge was calculating the total expenses from multiple records.

I solved this by using arrays and for loops to process all expenses.

Another challenge was updating the dashboard automatically.

I solved this by creating an updateDashboard() function that recalculates and displays the budget information.

## Conclusion

This project helped me understand JavaScript fundamentals, including conditional statements, arrays, loops, DOM manipulation, and event listeners.

SpendWise is now an interactive budgeting application that helps users manage their expenses more effectively.
