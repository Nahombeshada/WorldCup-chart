var data  = [];
var data1  = [];
var data2  = [];
var team  = [];
var team1 = [];
var team2 = [];




function insert1() {
  team.push({
       t1: document.getElementById("a").value,
       t2: document.getElementById("b").value,
       t3: document.getElementById("c").value,
       t4: document.getElementById("d").value,
      
     });   
}
function insert2() {
  team1.push({
       t1: document.getElementById("e").value,
       t2: document.getElementById("f").value,
       t3: document.getElementById("g").value,
       t4: document.getElementById("h").value,
      
     });   
}
function insert3() {
  team2.push({
       t1: document.getElementById("i").value,
       t2: document.getElementById("j").value,
       t3: document.getElementById("k").value,
       t4: document.getElementById("l").value,
      
     });   
}

function insert() {
  data.push({
       s1: document.getElementById("pointa").value,
       s2: document.getElementById("pointb").value,
       s3: document.getElementById("pointc").value,
       s4: document.getElementById("pointd").value,
      
     });   
}

function inserta() {
  data1.push({
       s1: document.getElementById("pointe").value,
       s2: document.getElementById("pointf").value,
       s3: document.getElementById("pointg").value,
       s4: document.getElementById("pointh").value,
      
     });   
}

function insertb() {
  data2.push({
       s1: document.getElementById("pointi").value,
       s2: document.getElementById("pointj").value,
       s3: document.getElementById("pointk").value,
       s4: document.getElementById("pointl").value,
      
     });   
}


function chart1()
{
var xValues = [team[0].t1,team[0].t2,team[0].t3,team[0].t4];
var yValues = [data[0].s1,data[0].s2,data[0].s3,data[0].s4];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Group 1"
    }
  }
});
}

function chart2()
{
var xValues = [team1[0].t1,team1[0].t2,team1[0].t3,team1[0].t4];
var yValues = [data1[0].s1,data1[0].s2,data1[0].s3,data1[0].s4];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Group 2"
    }
  }
});
}

function chart3()
{
var xValues = [team2[0].t1,team2[0].t2,team2[0].t3,team2[0].t4];
var yValues = [data2[0].s1,data2[0].s2,data2[0].s3,data2[0].s4];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Group 3"
    }
  }
});
}