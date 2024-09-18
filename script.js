document.getElementById('generateButton').addEventListener('click', function() {
    let description = document.getElementById('description').value;
    let imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = ''; // إفراغ الحاوية قبل إضافة الصور الجديدة

    // عدد الصور التي نريد جلبها
    const imageCount = 12;

    // جلب الصور باستخدام Fetch API من Pexels
    const apiKey = 'ephlxyptBuDWf3YguJZa2EsKVF1ZsokpJOR0Gb6cC9tcxkSAGnA5xEcm'; // ضع مفتاح الوصول الخاص بك هنا
    const query = encodeURIComponent(description);

    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${imageCount}`, {
        headers: {
            'Authorization': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        data.photos.forEach(photo => {
            // إنشاء عنصر صورة جديد
            let img = document.createElement('img');
            img.src = photo.src.medium;
            img.alt = description;
            img.classList.add('image');
            imagesContainer.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching image:', error));
});
