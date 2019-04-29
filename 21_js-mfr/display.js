d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AICAFYKEEQMAE2EFLQKQV3S42B2RS").then(function(data) {

    var total_enrollment = data
    .filter(function(n){return (n['schoolyear'] == 20112012);})
    .reduce(function(a, b){return a + b.total_enrollment}, 0)

    console.log(total_enrollment)

    /*
    for(i = 0; i < data.length; i++){
        school = data[i]
        console.log(school)
    }
    */

});
