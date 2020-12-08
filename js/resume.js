let image=document.querySelector('#cover');
let count=0;
function changeCoverPhoto()
{
    if (count%2==0)
    {
        image.src='images/me.JPG';
        image.srcset='images/me-2x.jpg';
        image.width='330';
        image.height='220';
    }
    else
    {
        image.src='images/me2.JPG';
        image.srcset='images/me2-2x.jpg';
        image.width='300';
        image.height='225';
    }
    count++;
}

image.addEventListener('click', changeCoverPhoto);

function changeOpacity()
{
    image.style.opacity='0.6';
}

function resetOpacity()
{
    image.style.opacity='1';
}

image.addEventListener('mouseover', changeOpacity);
image.addEventListener('mouseout', resetOpacity)