function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("you agreed");
}

function showCancel() {
    alert( "You canceled the execution." );
}

// method 1
ask("do you agree", showOk, showCancel);
// method 2
ask("do you agree", function() { alert("you agreed"); }, function() { alert("you canceled"); });

let age = prompt("enter your age", 16);

let welcome = (age > 18) ? () => { alert('Hello!') } : () => { alert('Greetings!') };
welcome();