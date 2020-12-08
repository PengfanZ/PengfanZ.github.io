let image=document.querySelector('img');

function changeLanguagePhoto()
{
    let num=Math.floor(Math.random()*4);
    if (num==0)
    {
        image.src='images/coffee-cup.png';
        image.srcset='images/coffee-cup-2x.png';
        image.width='320';
        image.height='278';
    }
    else if (num==1)
    {
        image.src='images/html5.png';
        image.srcset='images/html5-2x.png';
        image.width='285';
        image.height='320';
    }
    else if (num==2)
    {
        image.src='images/css.png';
        image.srcset='images/css-2x.png';
        image.width='320';
        image.height='320';
    }
    else
    {
        image.src='images/c.png';
        image.srcset='images/c-2x.png';
        image.width='279';
        image.height='320';
    }
}

changeLanguagePhoto();