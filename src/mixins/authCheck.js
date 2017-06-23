module.exports =  {

  created: function(){
    console.log('this is the mixin');
    if(this.user == null){
      this.$router.push('/login')
    }
  }

}
