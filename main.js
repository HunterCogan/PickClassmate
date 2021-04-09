const $ = function(ele) {
    return document.querySelector( ele );
};

//dom ele
const resHold = $('#result-hold');
const tempRes = $('#tempRes');

//name arr
const names = ['Andres', 'Cody', 'Cynthia', 'Daniela', 'David', 'Dicky', 'Francisco', 'Hunter', 'Jesper', 'Joey', 'Jonny', 'Juan', 'Sumeet'];

//save repeatition
const rm = (type, arr) => type==='color' ? Math.floor(Math.random() * 255) :
    type==='name' ? Math.floor(Math.random() * (arr.length - 1)) :
        console.log('rm type error');

const rc = () => `rgb(${rm('color')}, ${rm('color')}, ${rm('color')})`;

const clickWrapper = () => {
    $('#btn-hold button').onclick = function () {
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

//init bind
clickWrapper();