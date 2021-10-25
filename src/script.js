var btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
  document.getElementById("dates").innerHTML=" ";
     
      var year=document.getElementById("y").value;
      var month= document.getElementById("m").value;
      var m=["January(01)","February(02)","March(03)","April(04)","May(05)","June(06)","July(07)","August(08)","September(09)","October(10)","November(11)","December(12)"];
      var d=["Sunday(01)","Monday(02)","Tuesday(03)","Wednesday(04)","Thrusday(05)","Friday(06)","Saturday(07)"];
      var sum=0;
      var day=document.getElementById("d").value;
      if(year.length>4 || year.length<4 )
        alert("please enter year in 4 letter");
      else if(year<1700||year>2100)
       alert("please enter year between 1900-2100");
      else{
             if(year)
              {
                for(var i=0;i<12;i++)
                    if(month==m[i])
                        var final_month=i;
                for(var j=0;j<=6;j++){
                   if(day==d[j])
                       var final_day=j;
                }
                   
                if(final_month==0||final_month==2||final_month==4||final_month==6||final_month==7||final_month==9||final_month==11){
                    for(var k=1;k<=31;k++)
                    {
                      
                      var date=new Date(year,final_month,k)
                         if(date.getDay()==final_day){
                          
                           sum++;
                          document.getElementById("dates").innerHTML+=(date.toDateString()+"<br>");
                         }
                    }
                  document.getElementById("sday").innerHTML=(`"${d[final_day]}"`);
                  document.getElementById("sum").innerHTML=(`"${sum}"`);
                document.getElementById("smon").innerHTML=(`"${m[final_month]}"`);

                }
                else if(final_month==3||final_month==5||final_month==8||final_month==10)
                {
                  for(var k=1;k<=30;k++)
                  {
                    var date=new Date(year,final_month,k)
                       if(date.getDay()==final_day){
                         sum++;
                        document.getElementById("dates").innerHTML+=(date.toDateString()+"<br>");
                       }
                  }
                document.getElementById("sday").innerHTML= (`"${d[final_day]}"`);
                document.getElementById("sum").innerHTML=(`"${sum}"`);
                document.getElementById("smon").innerHTML=(`"${m[final_month]}"`);

                }
                else if(final_month==1){
                  for(var k=1;k<=29;k++)
                    {
                      var date=new Date(year,final_month,k);
                         if(date.getDay()==final_day){
                           sum++;
                          document.getElementById("dates").innerHTML+=(date.toDateString()+"<br>");
                      }
                    }
                  document.getElementById("sday").innerHTML=(`"${d[final_day]}"`);
                  document.getElementById("sum").innerHTML=(`"${sum}"`);
                document.getElementById("smon").innerHTML=(`"${m[final_month]}"`);
                }
              }
      }
});
