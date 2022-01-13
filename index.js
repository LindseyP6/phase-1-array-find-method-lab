
// function superbowlWin(record) {
//     let result = record.find(record => record.year === "W")
//     return result ? result.year : undefined;
// }

const superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    // return result ? result.year : undefined;
    if (result) {
        return result.year 
    } else {
        return undefined
    }
}


   
