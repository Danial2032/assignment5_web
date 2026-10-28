const userProfile = {
    name: "Alibayev Danial",
    birthYear: 2006,
    isDeveloper: true,
    hobbies: ["Coding", "Reading", "Chess"]
};

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
const updateProfileBtn = document.getElementById('updateProfileBtn');
const hobbiesList = document.getElementById('hobbiesList');
const hobbyCount = document.getElementById('hobbyCount');

function updateProfileUI() {
    
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const monthsOld = age * 12;

    displayName.textContent = userProfile.name;
    displayAge.textContent = age;
    displayMonths.textContent = monthsOld;
    displayDev.textContent = userProfile.isDeveloper ? "Yes" : "No";

    hobbiesList.innerHTML = "";
    userProfile.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });

    hobbyCount.textContent = userProfile.hobbies.length;
}

usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
updateProfileUI();

updateProfileBtn.addEventListener('click',function(){
    const parsedYear = parseInt(birthYearInput.value);
        
    if(usernameInput.value.trim() === "" || isNaN(parsedYear)){
        alert("Please fill in all fields");
        return;
    }

    userProfile.name = usernameInput.value.trim();
    userProfile.birthYear = parseInt(birthYearInput.value);

    updateProfileUI();
});

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
