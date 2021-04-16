Load_loop();

function Load_loop(){
    document.getElementsByTagName('form')[0].addEventListener('submit',submit);
    document.getElementById('clear').addEventListener('click',clearAll);
    document.getElementsByTagName('ul')[0].addEventListener('click',del_or_line);
}

function submit(a){
    a.preventDefault();
    let input = document.getElementsByTagName('input')[0];
    if (input.value !='')
       add(input.value);
    input.value='';
}

function add(task){
    let ul = document.getElementsByTagName('ul')[0];
    let str = '';
    str +=`<li> <span class="delete">×</span><input type="checkbox"><label>${task}</label> </li>`;
    ul.innerHTML+=str;
    document.getElementsByClassName('tasksBoard')[0].style.display = 'block';
}

function clearAll(a){
    let ul = document.getElementsByTagName('ul')[0].innerHTML = '';
              }
  
  // deleteTick
  function del_or_line(a){
    if(a.target.className == 'delete')
      del(a);
    else {
      line(a);
          }
      }
  
  // delete task
  function del(a){
    let remove = a.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }
  
  // tick a task
  function line(a){
    const task = a.target.nextSibling; //由于label是在input后面的
    if(a.target.checked){
      task.style.textDecoration = "line-through";
      task.style.color = "red";
    }else {
      task.style.textDecoration = "none";
      task.style.color = "black";
    }
  }
  
