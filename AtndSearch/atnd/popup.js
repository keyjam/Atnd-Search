(function (win) {
    var data = '';
    var doc = win.document;
    var xmlhttp = new XMLHttpRequest();
    data = doc.getElementById("sb");
    data.addEventListener("click", function() {
        document.getElementById('contents').innerHTML = '... Loading';
        var words = document.getElementById('words').value;
        xmlhttp.open(
                "GET",
                "http://api.atnd.org/events/?" +
                "keyword=" + words + "&"+ 
                "start=1&" +
                "count=20&" +
                "format=json",
                true);
        xmlhttp.onload = showData;
        xmlhttp.send(null);
    },false);

    function showData() {
        var htm='';
        var con  = document.getElementById("contents");
        var data = JSON.parse(xmlhttp.responseText);
        for (var i=0; i<data.events.length; i++) {
            htm+='<div style="padding: 5px 0; border-bottom: 1px solid #eee;font-size:13px;"><a href="'+data.events[i].event_url+'" target="_blank">'+data.events[i].title+'</a></div>';
        }
        con.innerHTML = htm;
    }
})(window);
