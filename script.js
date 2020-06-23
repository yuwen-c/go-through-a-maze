const unit = 16; // 走一步多少px
let [x, y] = [393, 10]; // 原點

const canvas = document.getElementById("canvas1"); // 抓到畫布
const ctx = canvas.getContext("2d"); // 做出2d繪畫物件
ctx.beginPath(); // 開始繪畫路徑
ctx.moveTo(x, y); // 移到迷宮出口
ctx.strokeStyle = "#0000FF"; // 設定線條顏色
ctx.lineWidth = 1; //線條寬度

// 讀textarea的文字，拆成array
const readAndMove = () => {
    try{
        const text = document.getElementById("textarea").value;
        const textArr = text.split(", "); 
        const splitedArr = textArr.map(item => item.split(" "));
        splitedArr.forEach(element => {
            // 判斷指令的逗號及空格是否正確
            if (element.length === 3){

            }
            else{
                // 直接終止function
                throw Error("please check the format")
            }
        })
        // 判斷方向是否「拼字錯誤」，才畫線及清空
        let flag = true; 
        splitedArr.forEach(element => {
            if(element[0] === "up" || element[0] === "down" || element[0] === "left" || element[0] === "right"){

            }
            else{
                return flag = false;
            }
        })
        if(flag){
            splitedArr.forEach(element => {
                calculate(element[0], element[1]); 
                document.getElementById("textarea").value = ""; 
                ctx.lineTo(x, y); // 移到目標座標
                ctx.stroke(); // 畫線           
            });
        }
        else{
            alert("please check the directions");
        }
    }
    catch(error){
        alert(error); // 指令的逗號、空格有誤
    }
}

// 傳入方向、數值，計算新座標
const calculate = (direction, value) => {
    switch(direction){
        case "up":
            y = y - value * unit; 
            break;
        case "down":
            y = y + value * unit; 
            break;
        case "left":
            x = x - value * unit;  
            break;
        case "right": 
            x = x + value * unit;  
            break;
        default: 
    }
}
