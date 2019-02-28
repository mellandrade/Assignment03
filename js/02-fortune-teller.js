/*eslint-env broswer*/
/*jslint devel: true */

alert("Let me tell you your fortune.");

function tellFortune(job, location, partner, kids) {
    "use strict";
    var fortune = "You will be a " + job + " in " + location + " and married to " + partner + " with " + kids + " kids.";
    window.alert(fortune);
}

tellFortune("fashion designer", "England", "a construction worker", 2);
tellFortune("professor", "Seattle", "a garbage collector", 3);
tellFortune("creative director", "Boston", "a lawyer", 2);