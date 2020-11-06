function collision(a,b){
    if (a.x-b.x<50&&b.x-a.x<50&&a.y-b.y<50&&b.y-a.y<50){
      return true
    }
      else{
       return false
      }
    }