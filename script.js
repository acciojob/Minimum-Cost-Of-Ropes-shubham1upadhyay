function calculateMinCost() {
      const input = document.getElementById("ropesInput").value;
      const ropes = input.split(",").map(Number);

      let totalCost = 0;

      while (ropes.length > 1) {
        ropes.sort((a, b) => a - b);
        const cost = ropes[0] + ropes[1];
        totalCost += cost;

        ropes.splice(0, 2);
        ropes.push(cost);
      }

      document.getElementById("result").innerHTML = totalCost;
    }
