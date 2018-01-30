var curTheme="monsterHunter";

var inValues = [];

function begin() {
    var mainBox = document.getElementById("main");
    mainBox.innerHTML = `<h1>`+getTitle()+` Mad Libs</h1>
    <form name="f" onsubmit="return processForm()" onreset="return resetForm()">
    <table>
        <tr>
            <td class="left">
                <label for="animal">Type of Animal:</label>
            </td>
            <td>
                <input type="text" name="animal" value="cow">
            </td>
        </tr>
        <tr>
            <td class="left">
                <label for="adj">Adjective:</label>
            </td>
            <td>
                <input type="text" name="adj" value="slow">
            </td>
        </tr>
        <tr>
            <td class="left">
                <label for="envir">Environment:</label>
            </td>
            <td>
                <input type="text" name="envir" value="plains">
            </td>
        </tr>
        <tr>
            <td class="left">
                <label for="action">Action:</label>
            </td>
            <td>
                <input type="text" name="action" value="eating">
            </td>
        </tr>
        <tr>
            <td class="left"></td>
            <td>
                <input type="submit" name="submit" value="Submit">
                <input type="reset" name="reset" value="Reset!">
            </td>
        </tr>
    </table>`;
    return false;
}

function changeTheme() {
    var newTheme = document.typeForm.type.value;
    if (newTheme === curTheme) {
        return false;
    }

    var box = document.getElementById("main");
    var body = document.body;

    box.classList.remove(curTheme);
    body.classList.remove(curTheme);
    body.classList.remove("background");

    box.classList.add(newTheme);
    body.classList.add(newTheme);
    body.classList.add("background");

    curTheme = newTheme;
    restartForm();
    return false;
}

function validateForm() {
    var values = [
        document.f.animal.value,
        document.f.adj.value,
        document.f.envir.value,
        document.f.action.value
    ];

    for (var i = 0; i < values.length; i++) {
        if (values[i] === "") {
            alert("Please fill out all fields.");
            return false;
        }
    }
    return true;
}

function processForm() {
    var mainBox = document.getElementById("main");

    if (!validateForm()) {
        return false;
    }

    var values = [
        document.f.animal.value,
        document.f.adj.value,
        document.f.envir.value,
        document.f.action.value
    ];

    var temp;
    switch(curTheme) {
        case "monsterHunter":
            // Input should be animal, adjective, environment, action
            temp = [
                "The ",
                " is a ferocious beast, known for its ",
                " demeanor. It can be found roaming ",
                ", ",
                " for most of the day."
            ];
            break;
        case "pizza":
            temp = [
                "Some people like their pizza with ",
                " meat on it, while others prefer pepperoni. Many prefer to eat their pizza ",
                ", but some prefer a fork and knife. Some of the best pizza can be found in ",
                ". They make their pizza by ",
                " the dough before putting toppings on it. It's some of the best pizza in the world!"
            ];
            break;
        case "zelda":
            temp = [
                "Hyrule is inhabited by many creatures, including the ",
                ". The Zora find it to be ",
                " while the Hyleans appreciate the creature for its beauty. ",
                " It originates from ",
                " where it often ",
                "."
            ];
            break;
        default:
            temp = [
                "",
                "",
                "",
                "",
                ""
            ];
    }
    mainBox.innerHTML = `
    <h1>Your Mad Lib:</h1>
    <p>`+temp[0]+values[0]+temp[1]+values[1]+temp[2]+values[2]+temp[3]+values[3]+temp[4]+
    `</p>
    <button onclick="return restartForm()">Restart</button>`;
}

function restartForm() {
    var mainBox = document.getElementById("main");
    mainBox.innerHTML = `<h1>`+getTitle()+` Mad Libs</h1>
    <button onclick="begin()">Begin</button>`;
    return false;
}

function resetForm() {
    document.f.animal.value = "";
    document.f.adj.value = "";
    document.f.envir.value = "";
    document.f.action.value = "";
    return false;
}

function getTitle() {
    var title;
    switch(curTheme) {
        case "monsterHunter":
            title = "Monster Hunter";
            break;
        case "pizza":
            title = "Pizza";
            break;
        case "zelda":
            title = "Legend of Zelda";
            break;
        default:
            title = "";
    }
    return title;
}