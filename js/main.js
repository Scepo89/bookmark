//lsten for form submit

document.getElementById('myForm').addEventListener('submit',saveBookmark);
//save Bookmark
function saveBookmark(e){
    //get form values
    var siteName=document.getElementById('siteName').value;
    var siteUrl=document.getElementById('siteUrl').value;
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


    //prevent form from submiting
    e.preventDefault();


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
                                    '</h3>'+
                                    '</div>';
    }
    

    
    
    
}
