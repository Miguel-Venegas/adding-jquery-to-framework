// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
let g = G$('John', 'Doe');

// using chainable methods here
g.greet().setLang('es').greet(true);
// let's us use our object at the click of the login button
$('#login').click(function(){
    //create new 'Greeter object'
    let loginGrtr = G$('Miguel', 'Venegas');

// this hides the login button
    // $('#logindiv').hide();

    // fire off an HTML greeting, passing the #greeting as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});