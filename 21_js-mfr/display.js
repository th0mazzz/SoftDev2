d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AICAFYKEEQMAE2EFLQKQV3S42B2RS").then(function(data) {

    var total_enrollment = data
    .filter(function(n){return (n['schoolyear'] == 20112012);})
    .reduce(function(a, b){return a + b['total_enrollment']}, 0);

    total_20112012 = document.getElementById('20112012_total');
    total_20112012.innerHTML = total_enrollment;

    var asians_num = data
    .filter(function(n){return (n['schoolyear'] == 20112012);})
    .reduce(function(a, b){return a + parseInt(b['asian_num'])}, 0);

    asians = document.getElementById('asians');
    asians.innerHTML = asians_num;

    asian_percentage = document.getElementById('asian_percentage');
    asian_percentage.innerHTML = (100 * (asians_num / total_enrollment)).toFixed(2);

    var boys_num = data
    .filter(function(n){return (n['schoolyear'] == 20112012);})
    .reduce(function(a, b){return a + parseInt(b['male_num'])}, 0);

    boys = document.getElementById('boys_num');
    boys.innerHTML = boys_num;

    boys_percentage = document.getElementById('boys_percentage');
    boys_percentage.innerHTML = (100 * (boys_num / total_enrollment)).toFixed(2);

    var girls_num = data
    .filter(function(n){return (n['schoolyear'] == 20112012);})
    .reduce(function(a, b){return a + parseInt(b['female_num'])}, 0);

    girls = document.getElementById('girls_num');
    girls.innerHTML = girls_num;

    girls = document.getElementById('boys_percentage');
    girls_percentage.innerHTML = (100 * (girls_num / total_enrollment)).toFixed(2);

    /*
    for(i = 0; i < data.length; i++){
        school = data[i]
        console.log(school)
    }
    */

});
