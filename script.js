function get(){
    var a=document.getElementById("data1").value;
    var b=document.getElementById("data2").value;
    var c=document.getElementById("data3").value;
    var d=document.getElementById("data4").value;
    var e=document.getElementById("data5").value;
   

    localStorage.setItem("data1",a);
    localStorage.setItem("data2",b);
    localStorage.setItem("data3",c);
    localStorage.setItem("data4",d);
    localStorage.setItem("data5",e);
}