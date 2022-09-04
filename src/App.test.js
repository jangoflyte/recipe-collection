// src/App.test.js
const setup = () => {
  const app = render(<App />);

  userEvent.click(app.getByText("Add Recipe"));

  // Add the submit button to your setup method:
  const submitButton = app.getByRole("button");
  const instructionsInput = app.getByLabelText("Instructions:");
  const nameInput = app.getByLabelText("Recipe name:");

  return {
    instructionsInput,
    nameInput,
    submitButton,
  };
};

test("recipe name from state appears in an unordered list", async () => {
  const { instructionsInput, nameInput, submitButton } = setup();
  const recipeName = "Lean Pockets";
  const recipeInstructions = "place in toaster oven on 350 for 45 minutes";

  await userEvent.type(instructionsInput, recipeInstructions);
  await userEvent.type(nameInput, recipeName);
  userEvent.click(submitButton);

  expect(screen.getByRole("listitem")).toBeInTheDocument();
  expect(screen.getByText(recipeName)).toBeInTheDocument();
});
