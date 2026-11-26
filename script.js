
// Store budget and expenses
let totalBudget = 0;

let expenses = [];

// Get HTML elements
const budgetInput = document.getElementById("budget");
const setBudgetButton = document.getElementById("setBudget");

const totalBudgetDisplay = document.getElementById("totalBudget");
const totalExpensesDisplay = document.getElementById("totalExpenses");
const balanceDisplay = document.getElementById("balance");
const messageDisplay = document.getElementById("message");

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Set budget using an event listener
setBudgetButton.addEventListener("click", function() {

    const budget = Number(budgetInput.value);

    if (budget <= 0 || budgetInput.value === "") {
        messageDisplay.textContent = "Please enter a valid budget.";
        return;
    }

    totalBudget = budget;

    updateDashboard();
});

// Add expense using form submission
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;

    if (totalBudget <= 0) {
        messageDisplay.textContent = "Please set your budget first.";
        return;
    }

    if (name.trim() === "" || amount <= 0 || category === "") {
        messageDisplay.textContent = "Please enter valid expense details.";
        return;
    }

    // Store expense in an array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    expenseForm.reset();

    updateDashboard();
});

// Update dashboard dynamically
function updateDashboard() {

    let totalExpenses = 0;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    const balance = totalBudget - totalExpenses;

    // Update dashboard using DOM manipulation
    totalBudgetDisplay.textContent = totalBudget.toLocaleString();
    totalExpensesDisplay.textContent = totalExpenses.toLocaleString();
    balanceDisplay.textContent = balance.toLocaleString();

    // Conditional statements
    if (balance < 0) {
        messageDisplay.textContent = "Warning! You have exceeded your budget.";
    } else if (balance === 0) {
        messageDisplay.textContent = "Your budget has been fully used.";
    } else {
        messageDisplay.textContent = "Great! You are within your budget.";
    }

    // Display expense records
    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        const expense = document.createElement("li");

        expense.textContent =
            expenses[i].name + " - KES " +
            expenses[i].amount.toLocaleString() +
            " (" + expenses[i].category + ")";

        expenseList.appendChild(expense);
    }
}
