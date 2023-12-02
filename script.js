// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


// Function that sets user's preferences to local storage and applies them. (also alerts user that preferences were saved)
function savePreferences() {
    // sets values entered in the form to variables
    const name = document.getElementById("name").value;
    const bColor = document.getElementById("background-color").value;
    const tColor = document.getElementById("foreground-color").value;
    // sets items to local storage in a JSON object (strings)
    localStorage.setItem("userPreferences" , JSON.stringify({
        name: name,
        bColor: bColor,
        tColor: tColor,
    }));
    // applies selected preferences
    applyPreferences();
    // alerts user that preferences are saved
    alert('Preferences are saved!');
}

// function that applies the preferences that were selected by the user
function applyPreferences() {
    // converts the JSOn string back to an object and then sets it to a variable called savedPreferences
    const savedPreferences = JSON.parse(localStorage.getItem("userPreferences"));
    // changes the actual styling of the elements on the webpage
    if (true) {
        // changes background color
        document.body.style.backgroundColor = savedPreferences.bColor;
        // changes the color of the text
        document.body.style.color = savedPreferences.tColor;
        // creates an h2 element
        const greet = document.createElement('h2');
        // sets the user's input for name to userName
        const userName = savedPreferences.name;
        // adds text to the h2 that was just created
        greet.textContent = `Hello, ${userName}!`;
        // inserts the newly created h2 element at the top of the page
        document.body.insertBefore(greet, document.body.firstChild);
    }
}

