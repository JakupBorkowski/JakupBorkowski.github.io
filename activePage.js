const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        console.log(`${activePage}`);
        link.classList.add('active');
    }
})

function changeLanguage()
{

    if(activePage === '/studia.html')
    {
        console.log('studia');
    }
    else if(activePage === '/index.html')
    {
        let data = document.getElementsByClassName("box");
        for(let i = 0; i < data.length; i++)
        {
            data[i].style.display = 'none';
        }
        let data2 = document.getElementsByClassName("box-ang");
        for(let i = 0; i < data2.length; i++)
        {
            data2[i].style.display = 'block';
        }
    }
    else if(activePage === '/praca.html')
    {
        console.log('praca');
    }
}

function changeLanguage2()
{

    if(activePage === '/studia.html')
    {
        console.log('studia');
    }
    else if(activePage === '/index.html')
    {
        let data = document.getElementsByClassName("box");
        for(let i = 0; i < data.length; i++)
        {
            data[i].style.display = 'block';
        }
        let data2 = document.getElementsByClassName("box-ang");
        for(let i = 0; i < data2.length; i++)
        {
            data2[i].style.display = 'none';
        }
    }
    else if(activePage === '/praca.html')
    {
        console.log('praca');
    }
}