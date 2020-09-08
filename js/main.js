//lsten for form submit

document.getElementById('myForm').addEventListener('submit',saveBookmark);
//save Bookmark
function saveBookmark(e){
    //get form values
    var siteName=document.getElementById('siteName').value;
    var siteUrl=document.getElementById('siteUrl').value;
    
       if(!validateForm(siteName,siteUrl)){
           return false;
       }
        var bookmark={
            name: siteName,
            url: siteUrl
        }

    //local storage test
        // localStorage.setItem('test', 'hello world');
        // console.log(localStorage.getItem('test'));
        // localStorage.removeItem('test');
        // console.log(localStorage.getItem('test'));
        
        //test if bookmarks is null
        if(localStorage.getItem('bookmarks')===null){
            //init array
            var bookmarks=[];
            //add to array
            bookmarks.push(bookmark);
            //set to local storage
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }else{
                //get bookmarks from local storage

              var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
              //add bookmark to array
              bookmarks.push(bookmark);
              //re set back to local storage
              localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            }
        //clear form when submiting
        document.getElementById('myForm').reset();

      //re fetch bookmarks
    fetchBookmarks();      

    //prevent form from submiting
    e.preventDefault();


}
//delete bookmark 
function deleteBookmark(url){
    //get bookmarsk for local storaga
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarska
    for(var i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url==url){
            //remove from array
            bookmarks.splice(i,1);
        }
    }
    //re set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //re fetch bookmarks
    fetchBookmarks();
}

//fetch bookmarks 
function fetchBookmarks(){
    //get bookmarsk from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    //get output id
    var bookmarksResults= document.getElementById('bookmarksResult');

    //build output
   bookmarksResults.innerHTML='';
    for(var i =0;i<bookmarks.length;i++){
        var name=bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResults.innerHTML+='<div class="card card-body bg-light">'+
                                    '<h3>'+name+
                                    '<a class="btn btn-default" target="_blank" href="'+url+'">visit</a> '+
                                    '<a onclick="deleteBookmark(\''+url+'\')"= class="btn btn-danger">delete</a> ' //pay atention '<a onclick"deleteBookmark(\''+url+'\')"
                                    '</h3>'+
                                    '</div>';
    }    
}
//validate form
function validateForm(siteName,siteUrl){
    //va;lidation in case of one of row did not fill up
    if(!siteName || !siteUrl){
        alert('please fill in the form ');
        return false;
    }
    
    // validation form
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
        if(!siteUrl.match(regex)){
            alert('please use a valid url');
            return false;
        }
        return true;
}
