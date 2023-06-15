
//page one
>shop>List of type of item eg,1.Hardware and Discs,
                              2.Digital Games,
                              3.Official Merchandise
                              4.Services
http://localhost:3245/category

//page 2
>list of item wrt type of item have selected
http://localhost:3245/categoryitem?categoryId=1

>list of item wrt type of item have selected + PS5
http://localhost:3245/categoryItem?categoryId=1&subCategoryId=1

>list of item wrt type of item have selected + PS VR2
http://localhost:3245/categoryItem?categoryId=1&subCategoryId=2

>list of item wrt type of item have selected + PS4
http://localhost:3245/categoryItem?categoryId=1&subCategoryId=3

//page 3 -eg. have selected "Digital Games"
>list of games
http://localhost:3245/gameIdProduct

>list of game + genre
http://localhost:3245/gameIdproduct?gerneId=1

>list of games + playable device
http://localhost:3245/gameIdproduct?playableDeviceId=1

list of game + genre + playable device
http://localhost:3245/gameIdproduct?playableDeviceId=1&genreId=3

//page 4
>details of item
http://localhost:3245/details/6488248fbf0bdbf67e9da2f7

>remove items

//page 5
>details of item/game
>place orders

//page 6
>list of orders 
http://localhost:3245/orders

>update orders details
>delete orders