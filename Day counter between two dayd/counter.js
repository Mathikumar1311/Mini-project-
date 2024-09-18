let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener('click', () => {
    let date1 = new Date(document.getElementById("date1").value);
    let date2 = new Date(document.getElementById("date2").value);

    if(date1.getTime() && date2.getTime()){
        let tinmeDifernce = date2.getTime() - date1.getTime();

        let dayDifernce = Math.abs(tinmeDifernce / (1000 * 3600 * 24));
        output.innerHTML = `Difference between the two dates is <span>
        ${dayDifernce}</span> days`;
    }
});