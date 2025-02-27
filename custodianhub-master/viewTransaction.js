const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

// Apply the saved state immediately to avoid flicker
const savedState = localStorage.getItem('sidebarState');
if (savedState === 'hide') {
    sidebar.classList.add('hide');
}

// Toggle the sidebar and save the state
menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
    if (sidebar.classList.contains('hide')) {
        localStorage.setItem('sidebarState', 'hide');
    } else {
        localStorage.setItem('sidebarState', 'show');
    }
});



// const searchButton = document.querySelector('#content nav form .form-input button');
// const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
// const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classList.toggle('show');
// 		if(searchForm.classList.contains('show')) {
// 			searchButtonIcon.classList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })


// if(window.innerWidth < 768) {
// 	sidebar.classList.add('hide');
// } else if(window.innerWidth > 576) {
// 	searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 	searchForm.classList.remove('show');
// }


// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		searchForm.classList.remove('show');
// 	}
// })



// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}
// })

const lightDarkToggle = document.getElementById('light-dark-mode-toggle');
const sunIcon = 'bx bxs-sun';
const moonIcon = 'bx bxs-moon';

// Check for the stored theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark'); // Apply dark mode if stored
  const icon = lightDarkToggle.querySelector('i');
  icon.className = moonIcon; // Set moon icon for dark mode
} else {
  document.body.classList.remove('dark'); // Ensure light mode by default
  const icon = lightDarkToggle.querySelector('i');
  icon.className = sunIcon; // Set sun icon for light mode
}

lightDarkToggle.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  document.body.classList.toggle('dark'); // Toggle dark mode class

  const icon = lightDarkToggle.querySelector('i'); // Select the icon inside the <a>
  if (document.body.classList.contains('dark')) {
    icon.className = moonIcon; // Switch to moon icon for dark mode
    localStorage.setItem('theme', 'dark'); // Save dark mode preference
  } else {
    icon.className = sunIcon; // Switch to sun icon for light mode
    localStorage.setItem('theme', 'light'); // Save light mode preference
  }
});





// Function to toggle the visibility of the search container
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    searchContainer.classList.toggle('active'); // Toggle visibility by adding/removing the 'active' class
}

// Filter table based on search input
function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.querySelector("table tbody");
    const rows = table.querySelectorAll("tr");

    rows.forEach((row) => {
        const cells = row.getElementsByTagName("td");
        
        // Get all the necessary columns
        const custodianNo = cells[0].textContent.toLowerCase();
        const custodianId = cells[1].textContent.toLowerCase();
        const cashFund = cells[2].textContent.toLowerCase();

        // Check if the filter text is in any of the columns
        if (custodianNo.indexOf(filter) > -1 || 
            custodianId.indexOf(filter) > -1 || 
            cashFund.indexOf(filter) > -1) {
            row.style.display = ""; // Show row
        } else {
            row.style.display = "none"; // Hide row
        }
    });
}


// Toggle Filter Menu Visibility
function toggleFilterMenu() {
  const filterMenu = document.getElementById('filterMenu');
  filterMenu.classList.toggle('visible');
  filterMenu.classList.toggle('hidden');
}

// Filter Table Rows Based on Status
function filterByStatus() {
  const selectedValue = document.querySelector('input[name="statusFilter"]:checked').value.toLowerCase();
  const table = document.querySelector('.table-data table tbody');
  const rows = table.getElementsByTagName('tr');

  for (let row of rows) {
      const status = row.querySelector('.status').textContent.toLowerCase();
      
      // Show/hide rows based on the filter
      if (selectedValue === 'all' || status === selectedValue) {
          row.style.display = ''; // Show row
      } else {
          row.style.display = 'none'; // Hide row
      }
  }
}

// Close Filter Menu When Clicking Outside
document.addEventListener('click', function(event) {
  const filterContainer = document.querySelector('.filter-container');
  const filterMenu = document.getElementById('filterMenu');
  if (!filterContainer.contains(event.target)) {
      filterMenu.classList.add('hidden');
      filterMenu.classList.remove('visible');
  }
});

// Function to open the Add Transaction Modal
function openAddTransactionForm() {
    // Get the modal element
    const modal = document.getElementById('addTransactionModal');
    
    // Show the modal by removing the 'hidden' class
    modal.classList.remove('hidden');
  }

  // Function to close the Add Transaction Modal
  function closeAddTransactionForm() {
    // Get the modal element
    const modal = document.getElementById('addTransactionModal');
    
    // Hide the modal by adding the 'hidden' class
    modal.classList.add('hidden');
  }

  // Event listener for the cancel button
  document.getElementById('cancelTransactionBtn').addEventListener('click', closeAddTransactionForm);