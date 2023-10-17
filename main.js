import './style.css'

// const el = document.getElementById('poster');
const el1 = document.querySelectorAll(".poster");



el1.forEach(element=>{
    const height =element.clientHeight;
       const width =element.clientWidth;
    element.addEventListener('mousemove', (evt)=>{
        const{layerX,layerY}=evt;
        const yRotation = ((layerX - width/2) / height ) * 20
        const xRotation = ((layerY - height/2) / height ) * 20
        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;
        element.style.transform = string;
    })
    element.addEventListener('mouseout', ()=>{
        element.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`;
    })
})

// el.addEventListener('mousemove', (evt)=>{
//     const{layerX,layerY}=evt;
//     const yRotation = ((layerX -width/2) / height ) * 20
//     const xRotation = ((layerY -height/2) / height ) * 20
//     const string = `
//     perspective(500px)
//     scale(1.1)
//     rotateX(${xRotation}deg)
//     rotateY(${yRotation}deg)`;
//     el.style.transform = string;
// })

// el.addEventListener('mouseout', ()=>{
//     el.style.transform = `
//     perspective(500px)
//     scale(1)
//     rotateX(0)
//     rotateY(0)`;
// })