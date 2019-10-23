import request from '../Utils/request'
export const getToBanner=()=>{
  return request({
     url:'gateway?type=2&cityId=110100&k=4558963',
    data:{
       host:'mall.cfg.common-banner'
    }
  })
};

  export const getToInfo=()=>{
  return request({
    url:'gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2611559',
    data:{
      host:'mall.film-ticket.film.list'
    }
  })
}

export const getList=(param)=>{
  return request({
    url:'gateway?__CITYID__&pageNum='+param.pageNum+'&pageSize='+param.pageSize+'&type=1&k=7947833',
    data:{
      host:'mall.film-ticket.film.list'
    }
  })
}

export const getPlayingList = (param) =>{
  return request({
    url:'gateway?__CITYID__&pageNum='+param.pageNum+'&pageSize=10&type=2&k=4426',
    data:{
      host:'mall.film-ticket.film.list'
    }
  })
}

export const getToDetail=(detail)=>{
  return request({
    url:`gateway?filmId=${detail.filmId}&k=8469017`,
    data:{
      host:'mall.film-ticket.film.info'
    }
  })
}

export const getToCinema=()=>{
  return request({
    url:'gateway?__CITYID__&ticketFlag=1&k=9713964',
    data:{
      host:'mall.film-ticket.cinema.list'
    }
  })
}

export const getToDes=(des)=>{
  return request({
    url:`gateway/?cinemaId=${des.cinemaId}&k=2392016`,
    data:{
      host:'mall.film-ticket.cinema.info'
    }
  })
}
//人员图片
export const getToPic=(pic)=>{
  return request({
    url:`gateway/?cinemaId=${pic.cinemaId}&k=2392016`,
    data:{
      host:'mall.film-ticket.film.cinema-show-film'
    }
  })
}

//城市
export const getCityList = () =>{
  return request({
    url:'gateway?k=7338854',
    data:{
      host:'mall.film-ticket.city.list'
    }
  })
}

//gateway/?filmId=4785&cinemaId=1040&date=1567612800&k=20255

//电影场次
export const getCinemaInfo = (dat) =>{
  return request({
    url:`gateway/?filmId=4785&cinemaId=${dat.cinemaId}&date=${dat.idd}&k=20255`,
    data:{
      host:'mall.film-ticket.schedule.list'
    }
  })
}

//影院详情页 电影列表
export const getCinemaNum = (dat) =>{
  return request({
    url:`gateway/?cinemaId=${dat.cinemaId}&k=7899285`,
    data:{
      host:'mall.film-ticket.film.cinema-show-film'
    }
  })
}


