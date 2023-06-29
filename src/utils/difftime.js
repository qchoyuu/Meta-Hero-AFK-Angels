export default function getTimeDifference(time1,time2){
    var diffTime = Math.round(Math.abs(time1.getTime() - time2.getTime())/1000);
    var day = parseInt(diffTime / (60 * 60 * 24))
    var hours = parseInt(diffTime % (60 * 60 *24) / (60 * 60))
    var minutes = parseInt(diffTime % (60 * 60) / 60)
    var seconds = diffTime % 60
    
    return {
      day:day,
      hours:hours,
      minutes:minutes,
      seconds:seconds
    }
}