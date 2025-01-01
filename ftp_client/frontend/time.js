const fs = require("fs")
const absolute = __dirname 
function get_time(){
    let now = new Date()
    let hours = now.getHours();
        if (hours<10)
        {
            hours="0"+hours
        }
        let minutes = now.getMinutes();
        if (minutes<10)
            {
                minutes="0"+minutes
            }
        
        let seconds = now.getSeconds();
        if (seconds<10)
        {
            seconds="0"+seconds
        }
        console.log(`${hours} : ${minutes} :  ${seconds}`)
}
//console.log(absolute)
//const file1 = fs.readFileSync(absolute+'/content/file.txt','utf8')
//console.log(file1)
//let output=get_time()
//fs.writeFileSync(absolute+'/content/write-file.txt',`${output} : hey honey ! \n`,{flag:'a'})
const time_asyn = setInterval(() => { get_time()},1000)
