// --- TASK 1: The Personal Info Object ---
const userProfile = {
    name: "Alibayev Danial",
    birthYear: 2006,
    isDeveloper: true,
    hobbies: ["Coding", "Reading", "Chess"]
};

// --- DOM Elements ---
const profileForm = document.getElementById('profileForm');
const usernameInput = document.getElementById('username');
const birthYearInput = document.getElementById('birthYear');

const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayMonths = document.getElementById('displayMonths');
const displayDev = document.getElementById('displayDev');

const hobbyInput = document.getElementById('hobbyInput');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const hobbiesList = document.getElementById('hobbiesList');
const hobbyCount = document.getElementById('hobbyCount');

// --- TASK 2: Arithmetic Calculations & Render Function ---
function updateProfileUI() {
    // Dynamic age calculation
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const monthsOld = age * 12;

    // Render object details to DOM
    displayName.textContent = userProfile.name;
    displayAge.textContent = age;
    displayMonths.textContent = monthsOld;
    displayDev.textContent = userProfile.isDeveloper ? "Yes" : "No";

    // Render hobbies list
    hobbiesList.innerHTML = "";
    userProfile.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });

    hobbyCount.textContent = userProfile.hobbies.length;
}

// Initialize UI with default values
usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
updateProfileUI();

// --- TASK 4: Event Listener for Form Submission ---
profileForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Update userProfile object from form input
    userProfile.name = usernameInput.value.trim();
    userProfile.birthYear = parseInt(birthYearInput.value);

    updateProfileUI();
});

// --- TASK 5: Creating & Removing Elements ---
addItemBtn.addEventListener('click', function() {
    const newHobby = hobbyInput.value.trim();
    if (newHobby !== "") {
        userProfile.hobbies.push(newHobby);
        hobbyInput.value = "";
        updateProfileUI();
    }
});

removeItemBtn.addEventListener('click', function() {
    if (userProfile.hobbies.length > 0) {
        userProfile.hobbies.pop();
        updateProfileUI();
    }
});