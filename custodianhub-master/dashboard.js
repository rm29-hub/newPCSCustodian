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




