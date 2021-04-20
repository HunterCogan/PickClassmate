const $ = function(ele) {
    return document.querySelector( ele );
};

//dom ele
const resHold = $('#result-hold');
const tempRes = $('#tempRes');

//name arr
let names = ['Andres', 'Cody', 'Cynthia', 'Daniela', 'David', 'Dicky', 'Francisco', 'Hunter', 'Jesper', 'Joey', 'Jonny', 'Juan', 'Robert', 'Sumeet'];

//render names in dynamic way
// const getNames = (arr) => {
//     console.log('test');
//     arr.forEach((e, i) => {
//         $('#name-row').innerHTML += `<div id="${e}" class="nameBtn" onclick="clickName('${e}')">${e}</div>`
//     });
// };

//handle click names
const clickName = (n) => {
    //global this
    let temp = $(`#${n}`);

    //handle toggle
    if (temp.classList.contains('canceled')) {
        //toggle to normal
        temp.style.backgroundColor = '#fff';
        temp.classList.toggle('canceled');

        //add name back to arr
        names.push(`${n}`);
    } else {
        //toggle off
        temp.classList.toggle('canceled');
        temp.style.backgroundColor = '#ffb3b3';

        //remove name from arr
        names = names.filter(e => e !== n);
    }
};


//save repetition
const rm = (type, arr) => type==='color' ? Math.floor(Math.random() * 255) :
    type==='name' ? Math.floor(Math.random() * arr.length) :
        console.log('rm type error');

const rc = () => `rgb(${rm('color')}, ${rm('color')}, ${rm('color')})`;

const clickWrapper = () => {
    $('#btn-hold button').onclick = function () {
        console.log(names.length);

        //set dynamic speed change variables
        let num = 0;
        let int = 100;
        let stop = 1000 / int * 3;

        //remove placeholder
        if (tempRes) {
            tempRes.classList.add('hidden');
        }

        //repeatedly change name up to certain point
        setInterval(() => {
            if (num > stop) {
                clearInterval()
            } else {
                resHold.style.backgroundColor = `${rc()}`;
                resHold.style.color = `${rc()}`;
                resHold.innerHTML  = `${names[rm('name', names)]}`;
                num++
            }
        }, int);

        //prevent spam
        $('#btn-hold button').onclick = null;
        setTimeout(() => {
            clickWrapper();
        }, 3000);
    };
};


//init bind/page functions
window.onload = function () {
   // getNames(names);
    clickWrapper();
};


//adding here aswell because problems with pageload on livelink
clickWrapper();
