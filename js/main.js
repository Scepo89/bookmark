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
