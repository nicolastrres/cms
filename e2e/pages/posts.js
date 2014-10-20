var SearchPostsPage = function (){
  this.monthField = element(by.model('filter.month'));
  this.newPostButton = element(by.css('[class="btn btn-default btn-block"]'));
  this.elementsFirstRow = element.all(by.repeater('post in posts').row(0)).all(by.tagName('td'));
 
  this.createNewPost = function(){
    this.newPostButton.click();
  }
  this.getColumnText = function (number){
    return this.elementsFirstRow.then(function(cols){
      return cols[number].getText();
    });
  }
  this.clickEdit = function(){
    return this.elementsFirstRow.then(function (cols){
      return cols[3].element(by.tagName('a')).click();
    });
  }
  this.selectMonth = function(month){
    this.monthField.sendKeys(month);
  }
}
module.exports = new SearchPostsPage();
