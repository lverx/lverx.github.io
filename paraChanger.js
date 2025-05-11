const messages = [
  "Supporting the underdeveloped one person at a time!",
  "Act. Empower. Transform.",
  "Advocating Equity, Empowering Action™",
  "'Living Bold and Free'",
  "Equity is Action, Not Intention.",
  "Disruption with Direction.",
  "The Equity Equation Starts With Us.",
  "Radical Empathy. Relentless Change.",
  "Not Just Inclusion--Influence.",
  "Not Just Future, but Force.",
  "Youth-Led, System-Focused, Change-Driven."
];

let index = 0;

function updateParagraph() {
    document.getElementById("bio2").innerText = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(updateParagraph, 1500);
