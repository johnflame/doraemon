!function(){
    function writeCode(prefix,cssCode){
        const code = document.querySelector(".code");
        const paint = document.querySelector("#paint");
        const codeWrapper = document.querySelector(".code-wrapper");
        let n = 0;
        let timer = setInterval(()=>{
            n+=1;
            code.innerHTML = cssCode.substring(0,n);
            paint.innerHTML = cssCode.substring(0,n);
            if(code.scrollHeight >codeWrapper.clientHeight){
                code.scrollTop = code.scrollHeight - codeWrapper.clientHeight;
            }
            if(n>=cssCode.length){
                window.clearInterval(timer);
            }
        }, 10);
    }
    const cssCode =`
    /*
     * 今天画一只哆啦A梦给你看
     */



    /*
     * 首先准备一张画纸
     */
    .showImage{
        flex:1;
        height:600px;
        border: 3px solid black;    
    }
    .container{
        width: 500px;
        height: 100%px;
        margin: 0 auto;
        margin-top:20px; 
    }
    /*
     * 先画哆啦A梦的脸
     */
    .container .face{
        position: relative;
        width:480px;
        height:470px;
        border:6px solid black;
        border-radius: 50%;
        background-color: #019FE9
    }
    /*
     * 接着画哆啦A梦的眼眶
     */
    .container .face .eyes{
        position: absolute;
        display: flex;
        justify-content: center;
        top:5px;
        left:50%;
        transform: translateX(-50%);
        z-index: 10;
    }
    .container .face .eyes .eye{
        width: 90px;
        height: 110px;
        border-radius: 50%;
        border:3px solid black;
        background-color: white;
    }
    /*
     * 再画哆啦A梦的眼珠
     */
    .container .face .eyes .eye .pupil{
        width:38px;
        height: 42px;
        border-radius: 50%;
        background-color: black;
        position: relative;
        top:50%;
        left:6px;
    }
    /*
     * 再来一点眼神光
     */
    .container .face .eyes .eye .pupil::after{
        content: '';
        position: absolute;
        display: block;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: white;
        top:40%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
    }
    /*
     * 接着画哆啦A梦的鼻子
     */
    .container .face .nose{
        width:52px;
        height: 52px;
        border-radius: 50%;
        border:3px solid black;
        background-color: red;
        position: relative;
        left:50%;
        transform: translateX(-50%);
        top:100px;
        z-index: 10;
    }
    /* 
     * 给鼻子上点光
     */
    .container .face .nose::after{
        content: '';
        position: absolute;
        display: block;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background-color: white;
        top:10%;
        left:15%;
     
    }
    /*
     * 给哆啦A梦的脸上色
     */
    .container .face .facebase{
        width: 420px;
        height: 400px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border:3px solid black;
    }
    /*
     * 接着画哆啦A梦的鼻线
     */
    .container .face .facebase .noseline{
        height: 230px;
        width: 0;
        background-color: black;
        border: 2.5px solid black;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top:94px;
    }
    /*
     * 这时候该给哆啦A梦加个嘴巴了
     */
    .container .face .facebase .mouthline{
        width:320px;
        height:110px;
        border:3px solid black;
        border-radius:0 0 50% 50%/0 0 100% 100%;
        border-top: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top:218px;
        
    }
    /*
     * 哆啦A梦好像缺了胡子
     */
    .container .face .facebase .mustache{
        width: 100%;
        height:150px;
        display: flex;
        justify-content: space-between;
        margin-top:50px; 
    }
    .container .face .facebase .mustache .must{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    
    }
    .container .face .facebase .mustache .mus{
        height: 0;
        width:150px;
        background-color: black;
        border: 1.5px solid black;
    }
    /*
     * 胡子好像有点奇怪，我们来调一下
     */
    .container .face .facebase .mustache .mustache-1{
        transform: rotate(15deg);
    }
    .container .face .facebase .mustache .mustache-2{
        transform: rotate(-15deg);
    }
    /*
     * 哆啦A梦的脸画完了，是不是还缺了一个大宝贝————铃铛
     */
    /*
     * 先画一个铃铛的带子给哆啦A梦系上
     */
    .container .necklace{
        width: 280px;
        height: 30px;
        border:5px solid black;
        background-color: red;
        border-radius:30px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        top:-40px;
    
    }
    /* 
     * 接着画了一个铃铛的形状
     */
    .container .necklace .bell{
        width: 60px;
        height: 60px;
        border: 5px solid black;
        border-radius: 50%;
        background-color: #ECC81A;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .container .necklace .bell .ring{
        width: 70px;
        height: 10px;
        border:5px solid black;
        background-color: #ECC81A;
        border-radius:10px;
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        top:10px;
    }
    /*
     * 铃铛上好像缺了一个洞
     */
    .container .necklace .bell .hole{
        position: absolute;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background-color: black;
        top:40px;
        left: 50%;
        transform: translateX(-50%);
    }
    .container .necklace .bell .hole::after{
        content: '';
        display: block;
        height: 5px;
        width: 0;
        background-color: black;
        border: 3px solid black;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top:9px;
    }
    /*
     * 到此哆啦A梦就画好啦，希望你喜欢(*/ω＼*)
     */`
    writeCode('',cssCode);
}.call()