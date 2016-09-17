    var items = [{name:"test",count:1,active:true},{name:"test22",count:1,active:false},{name:"test2",count:1,active:true}]




function inc(i){
items[i].count=items[i].count+1;
update();
}
function decr(i){
   
    items[i].count=items[i].count>1?items[i].count-1:1;
     update();
}

function remove(i){
    items.splice(i,1);
    update();

}
function toggleSold(i){
    items[i].active=!items[i].active;
    update();
}
function add(e){
    e.preventDefault(); 
    var name=e.target.elements["name"].value
    if(name!=''){
            items.push({name:name,count:1,active:true});
             update();
    }
}
 
function update(){
    var container=document.querySelector('.item-container');
     var containerAv=document.querySelector('.content-availble');
        var containerS=document.querySelector('.content-sold');
    container.innerHTML='';
    containerAv.innerHTML='';
    containerS.innerHTML='';

    for(var i=0;i<items.length;i++){
        var item={name:items[i].name,count:items[i].count,active:items[i].active};
    container.appendChild(createItem( item,i));
    if(item.active){
         containerAv.appendChild(createBadge(item,i));

    }else{
        containerS.appendChild(createBadge(item,1));
        }
    }
}


function createBadge(item,index){
    var newcontent=document.createElement('span');
    newcontent.className="p-2 gray small-border m-4 relative";

    newcontent.innerHTML= `
                       <span class="title">${item.name}</span> 
                       <span class="small-border orange p-3 floating-label">${item.count}
                       `
                       return newcontent;
}

function createItem(item,index){
     var newcontent = document.createElement('div');
 
     var hide=item.active?'':'hidden';
     var isSolded=item.active?'Buy':'Sold';
     var buyColor=item.active?'blue':'gray-dark';
    newcontent.innerHTML = `
        <div class="row flex space-b p-1 wrap baseline availble item">
                <div class="itemname">${item.name}</div>
                <div class="center  ">
                    <button class="green inc ${hide}" onclick="inc(${index})" style="visibility">+</button>
                    <span class="small-border gray p-2 counter">${item.count}</span> 
                    <button class="decr red ${item.count<=1?'gray-dark':''} ${hide}" onclick="decr(${index})" style="visibility">-</button>
                </div>
                <div class="left">
                    <button class="ui-button ${buyColor}" onclick="toggleSold(${index})">${isSolded}</button>
                    <button class="ui-button red del ${hide}"  onclick="remove(${index})"  >X</button>'
                </div>
            </div>
            `
            return newcontent;
}


document.addEventListener('DOMContentLoaded',function(){

    update();
})