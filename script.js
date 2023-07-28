const resultForm = document.getElementById("resultForm");
      const resultTable = document.getElementById("resultTable");
      const tbody = resultTable.querySelector("tbody");

      resultForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const rollInput = document.getElementById("roll");
        const DBMSInput = document.getElementById("DBMS");
        const DSAInput = document.getElementById("DSA");
        const ComputerNetworksInput = document.getElementById("Computer Networks");

        const name = nameInput.value;
        const roll = rollInput.value;
        const DBMS = DBMSInput.value;
        const DSA = DSAInput.value;
        const ComputerNetworks = ComputerNetworksInput.value;

        const total =
          parseInt(DBMS) + parseInt(DSA) + parseInt(ComputerNetworks);
        const percentage = ((total / 300) * 100).toFixed(2);

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${DBMS}</td>
        <td>${DSA}</td>
        <td>${ComputerNetworks}</td>
        <td>${total}</td>
        <td>${percentage}%</td>
        <td>
          <button class="edit-button" onclick="editResult(this)">Edit</button>
        </td>
      `;

        tbody.appendChild(newRow);

        nameInput.value = "";
        rollInput.value = "";
        DBMSInput.value = "";
        DSAInput.value = "";
        ComputerNetworksInput.value = "";
      });

      function editResult(button) {
        const row = button.parentNode.parentNode;
        const cells = row.querySelectorAll("td");

        const name = cells[0].textContent;
        const roll = cells[1].textContent;
        const DBMS = cells[2].textContent;
        const DSA = cells[3].textContent;
        const ComputerNetworks = cells[4].textContent;

        const nameInput = document.getElementById("name");
        const rollInput = document.getElementById("roll");
        const DBMSInput = document.getElementById("DBMS");
        const DSAInput = document.getElementById("DSA");
        const ComputerNetworksInput = document.getElementById("ComputerNetworks");

        nameInput.value = name;
        rollInput.value = roll;
        DBMS.value = DBMS;
        DSA.value = DSA;
        ComputerNetworksInput.value = ComputerNetworks;

        row.remove();
      }