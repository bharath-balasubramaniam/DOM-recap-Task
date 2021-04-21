let bdiv = document.createElement('div');
bdiv.classList.add('container-lg');
let row = document.createElement('div');
row.classList.add('row');
let col = document.createElement('div');
col.classList.add('col-12');

function createElement(elem,elemclass='',elemid='') {
    let element = document.createElement(elem);
    element.setAttribute('class',elemclass);
    element.id = elemid;
    return element;
}

function forlabel(elemfor='',elemtext='') {
    let element = document.createElement('label');
    element.setAttribute('for',elemfor);
    element.innerHTML = elemtext;
    return element;
}

function tableElement(elem,elem_scope='') {
    let element = document.createElement(elem);
    element.setAttribute('scope',elem_scope);
    return element;
}

let form = createElement('form');
let div1 = createElement('div','form-row');

let div1a = createElement('div','form-group');
div1a.classList.add('col-6');
div1a.style = 'margin-bottom: 5px'
let label1a = forlabel('firstName','First Name:');
let label1ainp = createElement('input','form-control','firstName');
label1ainp.setAttribute('type','text');
label1ainp.id = 'fname';
label1ainp.setAttribute('name','firstname');
label1ainp.setAttribute('required','');

let div1b = createElement('div','form-group');
div1b.classList.add('col-6');
div1b.style = 'margin-bottom: 5px'
let label1b = forlabel('lastName','Last Name:');
let label1binp = createElement('input','form-control','lastName');
label1binp.setAttribute('type','text');
label1binp.id = 'lname';
label1binp.setAttribute('name','lastname')
label1binp.setAttribute('required','');

div1a.append(label1a,label1ainp);
div1b.append(label1b,label1binp);
div1.append(div1a,div1b);

let div2 = createElement('div','form-row');

let diva = createElement('div','gender');
let label2 = forlabel('gender','Gender:');
label2.id = 'gen_food'
diva.append(label2);

let div2a = createElement('div','form-check');
div2a.classList.add('form-check-inline');
let div2ainp = createElement('input','form-check-input','male');
div2ainp.setAttribute('type','radio');
div2ainp.setAttribute('name','sex');
div2ainp.setAttribute('value','male');
let div2alab = forlabel('male','Male');
div2alab.classList.add('form-check-label')
div2a.append(div2ainp,div2alab);


let div2b = createElement('div','form-check');
div2b.classList.add('form-check-inline');
let div2binp = createElement('input','form-check-input','female');
div2binp.setAttribute('type','radio');
div2binp.setAttribute('name','sex');
div2binp.setAttribute('value','female');
let div2blab = forlabel('female','Female');
div2blab.classList.add('form-check-label');
div2b.append(div2binp,div2blab);

let div2c = createElement('div','form-check');
div2c.classList.add('form-check-inline');
let div2cinp = createElement('input','form-check-input','other');
div2cinp.setAttribute('type','radio');
div2cinp.setAttribute('name','sex');
div2cinp.setAttribute('value','other');
let div2clab = forlabel('other','Other');
div2clab.classList.add('form-check-label')
div2c.append(div2cinp,div2clab);
div2.append(div2a,div2b,div2c);

let div3 = createElement('div','form-row');

let div3a = createElement('div','col-12');
let label3 = forlabel('food','Favorite Food:');
label3.id = 'gen'
div3a.append(label3);

let div3aa = createElement('div','col-12');
let div3b = createElement('div','form-check');
div3b.classList.add('form-check-inline');
let div3binp = createElement('input','form-check-input','pizza');
div3binp.setAttribute('type','checkbox');
div3binp.setAttribute('name','food');
div3binp.setAttribute('value','pizza');
let div3blab = forlabel('pizza','Pizza');
div3blab.classList.add('form-check-label')
div3b.append(div3binp,div3blab);

let div3c = createElement('div','form-check');
div3c.classList.add('form-check-inline');
let div3cinp = createElement('input','form-check-input','burger');
div3cinp.setAttribute('type','checkbox');
div3cinp.setAttribute('name','food');
div3cinp.setAttribute('value','Burger');
let div3clab = forlabel('burger','Burger');
div3clab.classList.add('form-check-label')
div3c.append(div3cinp,div3clab);

let div3d = createElement('div','form-check');
div3d.classList.add('form-check-inline');
let div3dinp = createElement('input','form-check-input','sandwich');
div3dinp.setAttribute('type','checkbox');
div3dinp.setAttribute('name','food');
div3dinp.setAttribute('value','sandwich');
let div3dlab = forlabel('sandwich','Sandwich');
div3dlab.classList.add('form-check-label')
div3d.append(div3dinp,div3dlab);

let div3e = createElement('div','form-check');
div3e.classList.add('form-check-inline');
let div3einp = createElement('input','form-check-input','spaghetti');
div3einp.setAttribute('type','checkbox');
div3einp.setAttribute('name','food');
div3einp.setAttribute('value','spaghetti');
let div3elab = forlabel('spaghetti','Spaghetti');
div3elab.classList.add('form-check-label')
div3e.append(div3einp,div3elab);

let div3f = createElement('div','form-check');
div3f.classList.add('form-check-inline');
let div3finp = createElement('input','form-check-input','pasta');
div3finp.setAttribute('type','checkbox');
div3finp.setAttribute('name','food');
div3finp.setAttribute('value','pasta');
let div3flab = forlabel('pasta','Pasta');
div3flab.classList.add('form-check-label')
div3f.append(div3finp,div3flab);

div3aa.append(div3b,div3c,div3d,div3e,div3f);

div3.append(div3a,div3aa);

let div4 = createElement('div','form-row');

let div4add = createElement('div','form-group');
div4add.classList.add('col-6');
let div4addlab = forlabel('inputaddress','Address-1:');
let div4addinp = createElement('input','form-control','inputaddress');
div4addinp.setAttribute('type','text');
div4addinp.setAttribute('name','address1');
div4addinp.setAttribute('placeholder','Apartment,Studio or Floor');

div4add.append(div4addlab,div4addinp);
 
let div4city = createElement('div','form-group');
div4city.classList.add('col-4');
let div4citylab = forlabel('inputcity','City:');
let div4cityinp = createElement('input','form-control','inputcity');
div4cityinp.setAttribute('type','text');
div4cityinp.setAttribute('name','city');
div4cityinp.setAttribute('required','');

div4city.append(div4citylab,div4cityinp);

div4.append(div4add,div4city);

let div5 = createElement('div','form-row');

let div5add = createElement('div','form-group');
div5add.classList.add('col-6');
let div5addlab = forlabel('inputaddress2','Address-2:');
let div5addinp = createElement('input','form-control','inputaddress2');
div5addinp.setAttribute('type','text');
div5addinp.setAttribute('name','address2');
div5addinp.setAttribute('placeholder','123 Main street');

div5add.append(div5addlab,div5addinp);

let div5state = createElement('div','form-group');
div5state.classList.add('col-4');
let div5statelib = forlabel('state','State:');
let div5stateslct = createElement('select','form-control','state');
div5stateslct.setAttribute('name','state');
div5stateslct.setAttribute('placeholder','select one')
div5stateslct.setAttribute('required','')
fetch('https://gist.githubusercontent.com/bharath-balasubramaniam/5f708387ac2cad78dabc9990e0d5a98b/raw/0533986c9306f92f7c2c0635c9b5425847e7cf25/states')
.then(resp => {
    return resp.json()
})
.then(data => {
    
    for(let i of data) {
        let div5stateopt = createElement('option');
        div5stateopt.setAttribute('value',`${i.name}`);
        div5stateopt.innerHTML = `${i.name}`;
        
        div5stateslct.append(div5stateopt);
    }
    return div5stateslct;
})
.catch(err => {
    console.log(err)
})
div5state.append(div5statelib,div5stateslct);

div5.append(div5add,div5state);

let div6 = createElement('div','form-row');
let div6zip = createElement('div','form-group');
div6zip.classList.add('col-4');
let div6ziplab = forlabel('inputzip','Zip:');
let div6zipinp = createElement('input','form-control','inputzip');
div6zipinp.setAttribute('type','text');
div6zipinp.setAttribute('name','zip');

div6zip.append(div6ziplab,div6zipinp);

let div6cou = createElement('div','form-group');
div6cou.classList.add('col-6');
let div6coulab = forlabel('country','Country:');
let div6couslct = createElement('select','form-control','country');
div6couslct.setAttribute('disabled','')
let div6couopt = createElement('option');
div6couopt.innerHTML = 'India';
div6couopt.setAttribute('select','');
div6couslct.append(div6couopt);
div6cou.append(div6coulab,div6couslct);

div6.append(div6zip,div6cou);

let div7 = createElement('div','form-row');


let button = createElement('button','btn btn-info');
button.classList.add('btn-md');
//button.setAttribute('type','submit');
let h5 = createElement('h5');
h5.innerHTML = 'click here';
button.append(h5);
button.setAttribute('onclick','foo()');
button.addEventListener('click',()=>{
    th1.innerHTML = 'User id';
    th2.innerHTML = 'First Name';
    th3.innerHTML = 'Last Name';
    th4.innerHTML = 'Gender';
    th5.innerHTML = 'Favorite Food';
    th6.innerHTML = 'Address';
    th7.innerHTML = 'City';
    th8.innerHTML = 'Zip';
    th9.innerHTML = 'State';
    col2.append(table);
    form.reset();
})
div7.append(button)

form.append(div1,diva,div2,div3,div4,div5,div6);
col.append(form,div7);
row.append(col);

let dummy = createElement('div','row');
let br = createElement('br');
dummy.append(br);

let row2 = createElement('div','row');
let col2 = createElement('div','col-12');

let table = createElement('table','table table-striped');
let thead = tableElement('thead');

let tr0 = tableElement('tr');
let th1 = tableElement('th','col');
let th2 = tableElement('th','col');
let th3 = tableElement('th','col');
let th4 = tableElement('th','col');
let th5 = tableElement('th','col');
let th6 = tableElement('th','col');
let th7 = tableElement('th','col');
let th8 = tableElement('th','col');
let th9 = tableElement('th','col');
tr0.append(th1,th2,th3,th4,th5,th6,th7,th8,th9)
thead.append(tr0);

let tbody = tableElement('tbody');
table.append(thead,tbody);
row2.append(col2);

bdiv.append(row,dummy,row2);
document.body.append(bdiv);

count = 1;
function foo() {
    let tr1 = tableElement('tr');
    let th1 = tableElement('th','row');
    th1.innerHTML = `${count}`;
    let th2 = tableElement('td');
    th2.innerHTML = `${document.getElementById('fname').value}`;
    let th3 = tableElement('td');
    th3.innerHTML = `${document.getElementById('lname').value}`;
    let th4 = tableElement('td');
    th4.innerHTML = gendr();
    let th5 = tableElement('td');
    th5.innerHTML = food()
    let th6 = tableElement('td');
    th6.innerHTML = `${document.getElementById('inputaddress').value}<br>
                    ${document.getElementById('inputaddress2').value}`
    let th7 = tableElement('td');
    th7.innerHTML = `${document.getElementById('inputcity').value}`
    let th8 = tableElement('td');
    th8.innerHTML = `${document.getElementById('inputzip').value}`
    let th9 = tableElement('td');
    th9.innerHTML = `${document.getElementById('state').value}`
    if(th2.innerHTML!=='' && th3.innerHTML !== '' && th4.innerHTML!==' ' && th5.innerHTML !== [] && th6.innerHTML !== '' && th7.innerHTML !== '' && th8.innerHTML !=='') {
        tr1.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
        h5.addEventListener('click',()=>{
            count++;
            return count;
        })
        alert('Please check the data in the table after click OK')
    }else {
        alert('fill all the things in the form')
    }
    tbody.append(tr1);
}

function gendr() {
    if(div2ainp.checked) {
        return `${document.getElementById('male').value}`
    }
    if(div2binp.checked) {
        return `${document.getElementById('female').value}`
    }
    if(div2cinp.checked) {
        return `${document.getElementById('other').value}`
    }else {
        return ' '
    }
}

function food() {
    let arr = [];
    if(div3binp.checked) {
        arr.push(`${document.getElementById('pizza').value}`);
    }
    if(div3cinp.checked) {
        arr.push(`${document.getElementById('burger').value}`)
    }
    if(div3dinp.checked) {
        arr.push(`${document.getElementById('sandwich').value}`)
    }
    if(div3einp.checked) {
        arr.push(`${document.getElementById('spaghetti').value}`)
    }
    if(div3finp.checked) {
        arr.push(`${document.getElementById('pasta').value}`)
    }
    return arr.join(',')
}
