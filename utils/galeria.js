document.querySelectorAll('.gallery-image img').forEach(image =>
{
    image.onclick = () =>
    {
        document.querySelector('.gallery-popup').style.display = 'block';
        document.querySelector('.gallery-popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.gallery-popup span').onclick = () =>
{
    document.querySelector('.gallery-popup').style.display = 'none';    
}

document.querySelector('.gallery-popup').onclick = () =>
{
    document.querySelector('.gallery-popup').style.display = 'none';    
}