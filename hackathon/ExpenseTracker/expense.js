const exform=document.getElementById('exform');
const items=document.querySelector('#expensetable tbody')
exform.addEventListener('submit',function(event){
 event.preventDefault();
    const amount=document.getElementById('amount').value;
    const category=document.getElementById('category').value;
    const date=document.getElementById('date').value;

    if(!amount||!category||!date){
        alert('Please fill out all the fields');
        return;
    }
    addexpense(amount,category,date);
    exform.reset();
});

function addexpense(amount,category,date){
    const row = document.createElement('tr');

    const amountcell =document.createElement('td');
    amountcell.textContent=amount;
    row.appendChild(amountcell);

    const categorycell =document.createElement('td');
    categorycell.textContent=category;
    row.appendChild(categorycell);

    const datecell =document.createElement('td');
    datecell.textContent=date;
    row.appendChild(datecell);

    const actioncell=document.createElement('td');

    const editbutton =document.createElement('button');
    editbutton.textContent='Edit';
    editbutton.onclick=()=>editbtn(editbutton);
    actioncell.appendChild(editbutton);
    
    const deletebutton =document.createElement('button');
    deletebutton.textContent='Delete';
    deletebutton.onclick=()=>deletebtn(deletebutton);
    actioncell.appendChild(deletebutton);

    row.appendChild(actioncell);

    items.appendChild(row);
}

function editbtn(button){
    const row=button.closest('tr');
    const[amount,category,date]=row.children;
    document.getElementById('amount').value=amount.textContent;
    document.getElementById('category').value=category.textContent;
    document.getElementById('date').value=date.textContent;
    row.remove();
}

function deletebtn(button){
    button.closest('tr').remove();

}