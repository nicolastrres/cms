var Post = function (){
    var date =  new Date(), month = date.getMonth()+1, time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    var TIMESTAMP = date.getDate()+"/"+month+"/"+date.getFullYear()+" "+time;
    this.FILETOUPLOAD = "/Users/nicolastrres/Documents/mst_capa.png";
    this.HAT = "Teste chapeu";
    this.TITLE = "Teste titulo "+TIMESTAMP;
    this.SUPPORTLINE = "Teste linha fina";
    this.MENU = "meio ambiente";
    this.SECTION = "---Nenhum---";
    this.SECTIONVIDEO = "Vídeo";
    this.TAG = "Teste artigo normal";
    this.VIDEO = "https://www.youtube.com/watch?v=QixID6N6ImM";
  

}
module.exports = new Post();
