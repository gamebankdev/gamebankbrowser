 const FormatTime=(time=Date.now())=>{
    const fortTime=new Date(new Date(time).getTime()+8*60*60*1000)
    const year=fortTime.getFullYear()
    const month=(fortTime.getMonth()+1)<10?('0'+(fortTime.getMonth()+1)):((fortTime.getMonth()+1)<10)
    const day=fortTime.getDate()<10?('0'+ fortTime.getDate()):fortTime.getDate()
    const hours=fortTime.getHours()<10?('0'+ fortTime.getHours()):fortTime.getHours()
    const minutes=fortTime.getMinutes()<10?('0'+ fortTime.getMinutes()):fortTime.getMinutes()
    return `${year}-${month}-${day}  ${hours}:${minutes}`
}
export default FormatTime 