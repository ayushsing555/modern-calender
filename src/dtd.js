var btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.getElementById("dates").innerHTML=" ";
    var m=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var d=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    var y1=document.getElementById("y").value;
    var y2=document.getElementById("y2").value;
    if(y1.length>4||y1.length<4||y2.length>4||y2.length<4)
       alert("please enter valid year in 4 digits");
    else if(y1>2100||y2>2100||y1<1900||y2<1900)
      alert("please enter year between (1900-2100)");
      else{
          var date=document.getElementById("dte").value;
          var month=document.getElementById("m").value;
          var day=document.getElementById("d").value;
          for(var i=0;i<=11;i++)
          {
              if(month==m[i])
              var final_month=i;
          }
          for(var i=0;i<=6;i++)
          {
              if(day==d[i])
                var final_day=i;
          }
          var sum=0;
          for(var j=y1;j<=y2;j++)
          {
              
              var dte=new Date(j,final_month,date);
 
              if(j%4!=0&&final_month==1&&date>28)
              {
              document.getElementById("dates").innerHTML+=" "
              }
              else if(j%4==0&&final_month==1&&date>29){
              document.getElementById("dates").innerHTML+=" ";
              }
              else{
                   if(dte.getDay()==final_day)
                    sum++;
              document.getElementById("dates").innerHTML+=(dte.toDateString()+"<br>");
              }
          }
          document.getElementById("day").innerHTML=d[final_day];
          document.getElementById("sum").innerHTML=sum;
          document.getElementById("dy").innerHTML=parseInt(y2 - y1)
      }
})  
