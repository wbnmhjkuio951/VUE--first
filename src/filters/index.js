export const getPremiereAt = (value,format) =>{
  let time = value * 1000
  let date = new Date(time)
  if(format==='ymd'){
    return date.toLocaleDateString()
  }
  let str = ''
  let weeks = ['周天','周一','周二','周三','周四','周五','周六']
  str  += weeks[date.getDay()] + ''
  str += (date.getMonth() + 1) + '月'
  str += date.getDate() + '日'
  return str
}

export const getPremiereAo = (value,format) =>{
  let time = value * 1000
  let date = new Date(time)
  if(format==='ymd'){
    return date.toLocaleDateString()
  }
  let str = '';
  let weeks = ['周天','周一','周二','周三','周四','周五','周六']
  str += date.getHours()+':';
  str += date.getMinutes()
  return str
}
