var i = 0;
var images = [];
var time = 1500;

images[0] = 'css-3.png';
images[1] ='python.png';
images[2] = 'c-.png';
images[3] = 'c-sharp.png';
images[4] = 'js.png';
images[5] = 'mysql.png';
images[6] = 'java.png';
images[7] = 'docker.png';
images[8] = 'raspberry-pi.png';
images[9] = 'Icon-SOLIDWORKS-Electrical.png';
images[10] = 'tia.jpg';
images[11] = 'vsc.png';
images[12] = 'vs.png';
images[13] = 'gt3.png';
images[14] = 'gx3.ico';

function changeImg(){
    let tmpI = i;
    let tmpITab =[];
    tmpITab.push(tmpI);
    for(let k = 0; k < 8; k++)
    {
        tmpI = tmpI + 1;
        if(tmpI <= images.length - 1)
        {
            tmpITab.push(tmpI);
        }
        else
        {
            tmpI = 0;
            tmpITab.push(tmpI);
        }
    }
    document.slide1.src = images[tmpITab[0]];
    document.slide2.src = images[tmpITab[1]];
    document.slide3.src = images[tmpITab[2]];
    document.slide4.src = images[tmpITab[3]];
    document.slide5.src = images[tmpITab[4]];
    document.slide6.src = images[tmpITab[5]];
    document.slide7.src = images[tmpITab[6]];
    document.slide8.src = images[tmpITab[7]];

    if(i < images.length - 1)
    {
        i++;
    }
    else{
        i=0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;