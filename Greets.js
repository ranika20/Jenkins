const greets = [
  "Today is your best day.",
  "You're closer to your goals than yesterday.",
  "Great things start with small actions.",
  "This is a good day to make progress.",
  "You've got everything you need to succeed.",
  "Every step you take moves you forward.",
  "Make today count.",
  "Your future starts with what you do today.",
  "Your have beautiful days.",
  "Your have beautiful days man.",
  "Your have beautiful jakins days.",
];

function randomGreets() {
  const Index = Math.floor(Math.random() * greets.length);
  return greets[Index];
}

module.exports = { randomGreets, greets };
