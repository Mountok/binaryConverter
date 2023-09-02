window.onload = () => {
    let outputElem = document.getElementsByClassName('output');
    let input = document.getElementById('numInput')
    let result = [];
    input.value = 0;

    input.addEventListener('focus',(e)=>{
        input.value = '';
    })


    input.addEventListener('input',(e)=>{
        process()
    })


    window.plusButton.addEventListener('click',()=>{
        input.value++;
        process()
        
    })

    window.minusButton.addEventListener('click',()=>{
        input.value--;
        if(input.value < 0) input.value = 0;
        process()
          
    })
    
    function process(){
        result = []
        input.value.trim();
        if(input.value > 0 && input.value < 256){
            if(input.value == '1'){
                result.push('1')
                getFinalResult(result,outputElem)
            }else{
                getBinaryNum(input.value, result)
                if(result.length == 0){
                    for(let i = 0; i < 8; i++){
                        result.push('0')
                    }
                }else{
                    getFinalResult(result,outputElem)
                }
            }
            
            result = []
        }else{
            result = []
            getFinalResult(result,outputElem)
        }
    }
}
function getBinaryNum(inputval, array){
    (inputval % 2 == 0) ?
    array.push('0') : array.push('1')
    if(Math.floor(inputval / 2) <= 1){
        return array.push('1')
    }else getBinaryNum(Math.floor(inputval / 2),array)

}
function setNormalSize(array){
    for(let i = 8 - array.length; i > 0; i--)
        array.push('0');
    
    return array.reverse()
}

function getFinalResult(result,outputElem){
    let final_result = setNormalSize(result)
    console.log(final_result)

    for(let index in final_result){
        outputElem[0].children[index].innerHTML = final_result[index];

        if(final_result[index] == '1'){
            outputElem[0].children[index].style.backgroundColor = 'rgb(85, 241, 85)';
        }else{
            outputElem[0].children[index].style.background = 'none';

        }
    }
}

