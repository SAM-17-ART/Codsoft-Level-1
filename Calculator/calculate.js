let ans="";
let val="";
let clear="";
let newstr="";
const list=document.getElementsByClassName('numeric');
for(let i=0;i<list.length-1;i++)
{
    list[i].addEventListener('click',function action(){
        let firsttext=list[i].textContent;
        ans+=firsttext;
        document.getElementById('screen').textContent=ans;
    });
}

list[list.length-1].addEventListener('click',function evaluate(){
    val=ans;
    document.getElementById('screen').textContent=eval(val);
     ans=eval(val);
});

const endlist=document.getElementsByClassName('end');
endlist[0].addEventListener('click',function end()
{
    document.getElementById('screen').textContent=clear;
    ans="";
    
});
endlist[1].addEventListener('click',function back(){
     ans=ans.toString();
    newstr=ans.slice(0,ans.length-1);
    document.getElementById('screen').textContent=newstr;
    ans=newstr;
});
