const input=document.getElementById("input")
const buttons=document.querySelectorAll(".buttons")
const clear=document.getElementById("clear")
const allclear=document.getElementById("all_clear")
let exp=''
buttons.forEach(button=>{
    const values=button.getAttribute('data-tip')
    button.addEventListener('click',()=>{
        if(values==='='){
            try{
                exp=eval(exp).toString()
            }
            catch(err){
                exp='ERROR'
            }
            input.value=exp
        }
        else if(values==='AC'){
            exp=''
            input.value=exp.toString()
        }
        else if(values==='CL'){
            exp=exp.slice(0,-1)
            input.value=exp
        }else if(values){
            exp+=values
            input.value=exp.toString()
        }
    })
})