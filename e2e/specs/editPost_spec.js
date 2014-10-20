describe('edit an existing post',function(){
  var ptor = protractor.getInstance();
  var createPostPage = require('../pages/create_post.js'); 
  var helper = require("../helper.js");
  var searchPostsPage = require("../pages/posts.js");
  var postData = require("../Data/post.js");
  var oldTitle;
  var oldHat;
  var oldSupportLine;
  var oldMenu;
   
  beforeEach(function(){ 
    browser.sleep(2000);
    searchPostsPage.selectMonth('Janeiro');
    browser.sleep(2000);
    searchPostsPage.clickEdit();
    helper.waitUntilIsDisplayed(ptor, createPostPage.hatField, 1*1000);
  });

  it('should edit an existing post', function(){ 
    oldTitle= createPostPage.titleField.getAttribute('value');
    oldHat = createPostPage.hatField.getAttribute('value' );
    oldSupportLine = createPostPage.supportLineField.getAttribute('value');
    oldMenu = createPostPage.menuField.getText();

    helper.clear(createPostPage.hatField);
    helper.clear(createPostPage.titleField);
    helper.clear(createPostPage.supportLineField);

    createPostPage.fillHat(postData.HAT);
    createPostPage.fillTitle(postData.TITLE);
    createPostPage.fillSupportLine(postData.SUPPORTLINE);
    createPostPage.fillMenu(postData.MENU);
    createPostPage.postDraft();
    browser.sleep(3000);
    searchPostsPage.selectMonth('Janeiro');
    browser.sleep(2000);
    searchPostsPage.clickEdit();
    expect(createPostPage.titleField.getAttribute('value')).toEqual(postData.TITLE);
    expect(createPostPage.hatField.getAttribute('value')).toEqual(postData.HAT);
    expect(createPostPage.supportLineField.getAttribute('value')).toEqual(postData.SUPPORTLINE);
    expect(createPostPage.getCheckedMenu()).toEqual(postData.MENU);
  });
    
  afterEach(function(){
    helper.clear(createPostPage.hatField);
    helper.clear(createPostPage.titleField);
    helper.clear(createPostPage.supportLineField);
    createPostPage.fillHat(oldHat);
    createPostPage.fillTitle(oldTitle);
    createPostPage.fillSupportLine(oldSupportLine);
    createPostPage.fillMenu(oldMenu);
    createPostPage.postDraft();
  });

});
