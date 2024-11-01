const form =document.querySelector('.form-inputs')
const nameInput = document.querySelector('.firstName')
const emailInput = document.querySelector('.email')
const messageInput = document.querySelector('.message')

const serviceID = 'service_k8qt0bl';
const templateID =  'template_z3l773s';
const publicKey =  "bfbDpLExWdCN96Mxg";

emailjs.init(publicKey);

form.addEventListener('submit',e =>{
    e.preventDefault();
    const inputData = {
        from_name: nameInput.value,
        user_email: emailInput.value,
        message: messageInput.value,
    }
    emailjs.send(templateID, serviceID, inputData).then(
        ()=>{
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            console.log("did it")
        },
        (error)=>{
            console.log(error)
        }
    )
})