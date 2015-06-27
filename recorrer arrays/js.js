


    var json = [{
        "id" : "1",
        "msg"   : "hi",
        "tid" : "2013-05-05 23:35",
        "fromWho": "hello1@email.se"
    },
        {
            "id" : "2",
            "msg"   : "there",
            "tid" : "2013-05-05 23:45",
            "fromWho": "hello2@email.se"
        }];

     obj = JSON.parse(json);


    for(var i=0; i < obj.length; i++){
        alert(obj.id[i]);
        alert(obj.msg[i]);
    }
