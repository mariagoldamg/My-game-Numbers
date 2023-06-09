const input = document.querySelector (`#guess`);
const btn = document.querySelector (`#btn`);
const answer = Math.floor(Math.random () *10)+1;
console.log (answer);

input.addEventListener (`keypress`, function(e){
    if (e.keyCode===13){
        play();
    }
})

btn.addEventListener(`click`, play);

function play() {

    const userNumber = document.querySelector (`#guess`).value;

    if(userNumber<1 || userNumber>10) {
        Swal.fire({
            icon: 'error',
            title: '😔',
            text: 'Something is wrong! Try a different number.',
            confirmButtonColor: '#2192FF'
           
          })
    }

    else if (isNaN (userNumber)){
        Swal.fire({
            icon: 'error',
            title: '😔',
            text: 'This does not look like a number, try again!',
            confirmButtonColor: '#2192FF'
          })
    }

    else {

        if (userNumber<answer){
            Swal.fire({
                text:'Higher!',
                confirmButtonColor: '#2192FF'
            }
            )
        }
        else if (userNumber>answer){
            Swal.fire({
                text:'Lower!',
                confirmButtonColor: '#2192FF'})
        }
        else {
            Swal.fire({
                title: 'Ta-daaaaaaa!!!!!',
                text: 'You won!',
                imageUrl: 'https://media.istockphoto.com/photos/businessman-holding-smile-icon-for-the-best-evaluation-customer-picture-id1356554393?b=1&k=20&m=1356554393&s=170667a&w=0&h=XbW0qI1vAzM0OjZlpDCqtKGNmQ2MY_vxAvwXDCB2qJ0=',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: '#2192FF'
              })
        }
    }
}
