  /**
 * Function to print a random star pattern in the console.
 * The pattern consists of a grid of rows and columns, where a '*' represents the current position.
 * The position updates randomly in an infinite loop at a specified interval.
 */
function printRandomStarPattern() {
  /** @const {number} n - Number of rows in the pattern */
  const n = 3;

  /** @const {number} m - Number of columns in the pattern */
  const m = 5;

  /** @let {number} currentRow - Current row position of the '*' */
  let currentRow = 1;

  /** @let {number} currentColumn - Current column position of the '*' */
  let currentColumn = 1;

  /**
   * Interval function to update and print the star pattern.
   * Clears the console on each iteration and updates the position randomly.
   */
  setInterval(() => {
      console.clear(); // Clear console on each iteration

      for (let i = 1; i <= n; i++) {
          let row = '| ';
          for (let j = 1; j <= m; j++) {
              if (i === currentRow && j === currentColumn) {
                  row += '* ';
              } else {
                  row += '  '; // Empty space
              }
          }
          row += '|';
          console.log(row);
      }

      console.log("".padStart((m * 2) + 2, '-')); // Bottom line

      // Update the position for the next iteration
      currentRow = Math.floor(Math.random() * n) + 1;
      currentColumn = Math.floor(Math.random() * m) + 1;
  }, 1000); // Repeat every 1000 milliseconds (1 second)
}

// Start the infinite loop to print and update the star pattern
printRandomStarPattern();
