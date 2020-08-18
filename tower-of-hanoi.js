let count = 1;

function move(from, to) {
  console.log(`Count is: ${count} Move disk from ${from} to ${to}`);
  count++;
}

function hanoi(numOfDisks, from, via, to) {
  //base case
  if (numOfDisks === 0) return;
  hanoi(numOfDisks - 1, from, to, via);
  move(from, to);
  hanoi(numOfDisks - 1, via, from, to);
}

hanoi(4, 'A', 'B', 'C');

// exponential