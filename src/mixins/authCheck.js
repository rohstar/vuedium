module.exports =  {

  created: function(){
    if(this.user == null){
      this.$router.push('/login')
    }
  }

}
