var i = 0;
var images = [];
var time = 1500;

images[0] = 'technologies/css-3.png';
images[1] ='technologies/python.png';
images[2] = 'technologies/c-.png';
images[3] = 'technologies/c-sharp.png';
images[4] = 'technologies/js.png';
images[5] = 'technologies/mysql.png';
images[6] = 'technologies/java.png';
images[7] = 'technologies/docker.png';
images[8] = 'technologies/raspberry-pi.png';
images[9] = 'technologies/Icon-SOLIDWORKS-Electrical.png';
images[10] = 'technologies/tia.jpg';
images[11] = 'technologies/vsc.png';
images[12] = 'technologies/vs.png';
images[13] = 'technologies/gt3.png';
images[14] = 'technologies/gx3.ico';

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