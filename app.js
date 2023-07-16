const express=require('express')
const bodyparser=require('body-parser')
const app=express()
let items=[]
// app.use(urlencoded.bodyparser({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    var today =new Date()
    // var day=""
    // switch (today.getDay()) {
    //     case 0:
    //         day="sunday";
    //         break;
    //     case 1:
    //         day="monday";
    //         break;
    //     case 2:
    //         day="tuesday";
    //         break;

    //     case 3:
    //         day="wednesday"
    //         break;

    //     case 4:
    //         day="thursday"
    //         break;
    //     case 5:
    //         day="friday"
    //         break;
    //     case 6:
    //         day="saturday"
    //         break;


    
    //     default:
    //         console.log("error")
    //         break;
    // }
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day=today.toLocaleDateString("en-US",options)

    // if (today.getDay()==6 || today.getDay()==0){
    //     day="weekend"

    //     // res.render('list', {kindofday:day});

    // }else{
    //     day="weeekday"
    //     // res.render('list', {kindofday:day});

    
        
    // }
    res.render('list', {kindofday:day,newListItem:items});

    // res.sendFile(__dirname+"/index.html")
})
app.post('/',function(req,res){
     let item=req.body.newItem
     if (item!="") {
     items.push(item)

        
     }
    res.redirect('/')
  
    
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})
