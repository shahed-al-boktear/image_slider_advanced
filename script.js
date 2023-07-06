const images = document.querySelectorAll('.slider_container img');
let counter = 1;

let prev_button = document.querySelector('#prev');
let next_buttom = document.querySelector('#next');

images.forEach((img,index)=>{
    img.style.transform = `translateX(${counter*-100}%)`;
    img.style.left = `${index*100}%`;
});


prev_button.addEventListener('click', ()=>{
    if(counter <= 0){
        // counter = images.length-2;
        // slide_images_no_transition();
        return;
    }else{
        counter -=1; 
        slide_images();
    }
});

next_buttom.addEventListener('click', ()=>{
    if(counter >= images.length-1){
        // counter = 1;
        // slide_images_no_transition();
        return;
    }else{
        counter +=1;
        slide_images();
    }
});

images[counter].addEventListener('transitionend', ()=>{
    if(images[counter].id === 'last_image'){
        counter = images.length-2;
        slide_images_no_transition();
    }else if (images[counter].id === 'first_image'){
        counter = 1;
        slide_images_no_transition();
    }


    /***************pagination bar code************ */
});

/****************we can do this too*********/

// images.forEach(img=>{
//     img.addEventListener('transitionend', ()=>{
//     if(images[counter].id === 'last_image'){
//         counter = images.length-2;
//         slide_images_no_transition();
//     }else if (images[counter].id === 'first_image'){
//         counter = 1;
//         slide_images_no_transition();
//     }
//     });
// });

let slide_images_no_transition=()=>{
    images.forEach((img)=>{
        img.style.transform = `translateX(${counter*-100}%)`;
        img.style.transition = `${0}s`;
    });
}

let slide_images=()=>{
    images.forEach((img)=>{
        img.style.transform = `translateX(${counter*-100}%)`;
        img.style.transition = `${.4}s`;
    });
}


setInterval(() => {
    if(counter >= images.length-1){
        // counter = 1;
        // slide_images_no_transition();
        return;
    }else{
        counter +=1;
        slide_images();
    }
}, 3000);



/*********active pagination bar**************/

const pagination = document.querySelectorAll('.pagination_bar');

pagination.forEach((dot, index)=>{
    dot.addEventListener('click',()=>{
        counter = index+1;
        slide_images();
        
        document.querySelector('.active').classList.remove('active');
        dot.classList.add('active');
    });
});

images[counter].addEventListener('transitionend', ()=>{
    index = counter -1;
    document.querySelector('.active').classList.remove('active');
    pagination[index].classList.add('active');
    /***************pagination bar code************ */
});


// images[counter].addEventListener('transitionend', ()=>{
//     if(images[counter].offsetX){
//         console.log(images[counter].offsetX);
//     }
// });

