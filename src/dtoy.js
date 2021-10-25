var btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.getElementById("dates").innerHTML=" ";
    var year=document.getElementById("y").value;
    if(year.length>4 || year.length<4 )
    alert("please enter year in 4 letter");
  else if(year<1700||year>2100)
   alert("please enter year between 1900-2100");
  else{
        var dte=document.getElementById("dte").value;
        if(year%4!==0){
            for(i=0;i<=11;i++)
            {
                var date=new Date(year,i,dte);
                if((i==1&&dte>28)||(i==3&&dte>30)||(i==5&&dte>30)||(i==8&&dte>30)||(i==10&&dte>30))
                  document.getElementById("dates").innerHTML+=" ";
                else
                  document.getElementById("dates").innerHTML+=(date.toDateString()+"<br>");
            }
        }
         else {
            for(i=0;i<=11;i++)
            {
                var date=new Date(year,i,dte);
                if((i==1&&dte>29)||(i==3&&dte>30)||(i==5&&dte>30)||(i==8&&dte>30)||(i==10&&dte>30))
                  document.getElementById("dates").innerHTML+=" ";
                else
                  document.getElementById("dates").innerHTML+=(date.toDateString()+"<br>");
            }
  }
}
})