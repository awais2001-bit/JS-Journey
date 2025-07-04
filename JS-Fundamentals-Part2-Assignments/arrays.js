/* Write your code below. Good luck! 🙂 */

function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
