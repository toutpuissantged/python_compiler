let ref1=[]
let ref2=[]
let cont =0
let auto =false
function run(){
    function print(pint){
        a =document.createElement('p')
        a.textContent=">>> "+pint
        si=document.getElementById('out')
        si.appendChild(a)
        cont+=1
    }
    input_type=""
    let bool2 =false
    let index_3=0
    let bool3=false
    input_val=document.getElementById("inp").value
    function vari(){
        index_2=0
        let bb=false
        let var1=""
        let var2=""
        for (let index = 0;  index< input_val.length; index++) {
            if ('=' ===input_val[index]){
                input_type="var_create"
                index_2=index
                bb=true
            }  
        }
        if(index_2>0){
        for (let index = 0;  index< index_2; index++) {
             var1+=input_val[index]
        }
        for (let index = index_2+1; index< input_val.length; index++) {
             var2+=input_val[index]
        }
        for(let index=0;index< ref1.length; index++) {
            if (ref1[index]==var1){
                document.getElementById("ch").innerText="variable '"+ref1[index]+"' already existe and :    "+ ref1[index]+" = "+ref2[index]
                bool2=true
                index_3=index
            }
            
        }
        let tr = var2.indexOf('"')
        let tr2 = var2.indexOf("'")
        let tr3 = parseInt(var2)
        console.log(tr)
        if (tr==0){
            if(var2[0]=='"'&var2[var2.length -1]=='"'){
                bool3=true
            }
        }
        else if (tr2==0){
            if(var2[0]=='"'&var2[var2.length -1]=='"'){
                bool3=true
            }
        }
        console.log("var1 =",var1,";var2=",var2)
        console.log(index_2)
        if(bool2==false){
            ref1.push(var1)
            ref2.push(var2)
            print("variable  '"+var1+"'  defined")
            console.log("nouvelle variable creer")
        }
        else if (bool2==true){
            ref2[index_3]=var2
            print("value of '"+var1+"' has update to "+var2)
            console.log("variable mis a jour")
        }
        }


    }
    function vari2(){
            if (index_2==0){
                for (let index = 0;  index< ref1.length; index++) {
                     if (input_val==ref1[index]){
                        print(ref2[index])
                        return index_2=1
                     }
                }
            }
    }
    function vari3(){
        if (index_2==0){
            for (let index = 0;  index< input_val.length; index++) {
                 if ("+"==input_val[index]||"*"==input_val[index]||"/"==input_val[index]||"-"==input_val[index]){
                    let calc = parseInt(input_val)
                    console.log(calc)
                 }
            }
        }
    }
    vari()
    vari2()
    vari3()
    if (cont>5&auto==true){
        remove()
        cont=0
    }
    
}
function remove(){
    let si=document.getElementById('out') 
    si.innerHTML='<p>Python 3.6.8 (default, Jan  3 2019, 03:42:36)</br>[GCC 8.2.0] on linux</br>Type "help", "copyright", "credits" or "license" for more information.</br></p>'
    document.getElementById("inp").value=""
    
}
function real_time() {
    let bool=false
    let rec =document.getElementById("inp").value
    for(let index=0;index< ref1.length; index++) {
        if (ref1[index]==rec){
            document.getElementById("ch").innerText="variable '"+ref1[index]+"' already existe and :    "+ ref1[index]+" = "+ref2[index]
            bool=true
        }
        
    }
    if(bool===false){
        document.getElementById("ch").innerText=""
    }
}
function cocher(){
    if(auto===false){
        auto=true
    }
    else{
        auto=false
    }
}
