var droper;
function drag(a) {
    droper = a.target;
}

//allow the assignment drop
function allowDrop(a) {
    a.preventDefault();
}

//drop the assignment
function drop(a) {
    a.preventDefault();

    let parent;
    if(a.currentTarget){
        
        parent = a.currentTarget
    }else{
       
        parent = a.path.filter((i)=>{
            if(i.classList){
                return i.classList.contains('List');
            }
        })[0];
    }
    parent.appendChild(droper);
}