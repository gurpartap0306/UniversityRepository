var apiurl = 'http://dev.cs.smu.ca:8118';

//var apiurl = 'http://localhost:8118';

function createUniversity(){
    var name = $("#name").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
/*
    if(!(name && address && phone)){
        alert("All fields are required"); 
        console.log('this');
        return;
    }
*/
    var newUniversity = {
        "name" : name,
        "address" : address,
        "phone" : phone
    };

    $.post(apiurl + "/universities", newUniversity, function(data){
        console.log("added");
    });
    
    alert("university added");
    

    return false;
}



function search(){



var uniName=document.getElementById("searchName").value;


if(uniName===""){
    alert("please enter university name for search.");

    return;
}

$.get(apiurl + "/universities/" + uniName, function (data) {

    $("#universities tr").remove();
    
    var table = document.getElementById("universities");
    
    var universities = data;

    if(universities==null){
        alert("No matching records found");
        return;
    }

        var tab=document.getElementById("newTable");
        tab.style.display="block";
        var btn = document.createElement("button");
        btn.id="id"+0;
        btn.className="btn btn-danger";
        btn.type="button";
        btn.innerHTML="Delete";
        btn.setAttribute("onclick", "deleteUniversity(this.id)");
        var r = table.insertRow(-1);
        var c0=r.insertCell(0);
        var c1=r.insertCell(1);
        var c2=r.insertCell(2);
        var c3=r.insertCell(3);
        r.id="rid"+0;
        c0.id="uid"+0;
        c0.innerHTML = universities.name;
        c1.innerHTML = universities.address;
        c2.innerHTML = universities.phone;
        c3.appendChild(btn);
});
    
}

function deleteUniversity(btn_id){

    var uid = "u"+btn_id;
    var rid = "r"+btn_id;
    console.log(rid);
    var uni=$("#"+uid).html();
    console.log(uid);
    $.ajax({
        url: apiurl+'/universities/'+uni,
        type: 'DELETE',
        success: function(result) {
            $("#"+rid).remove();
            alert("university deleted!");
            
        }
    });

}

function showAll(){
    $.get(apiurl+"/universities",function(data){
        $("#universities tr").remove();
    
        var table = document.getElementById("universities");
    
        var universities = data;

        if(universities==null){
            alert("No matching records found");
            return;
        }

        var tab=document.getElementById("newTable");
        tab.style.display="block";

        for (var i = 0; i < universities.length; i++) {
            var btn = document.createElement("button");
        btn.id="id"+i;
        btn.className="btn btn-danger";
        btn.type="button";
        btn.innerHTML="Delete";
        btn.setAttribute("onclick", "deleteUniversity(this.id)");
        var r = table.insertRow(-1);
        var c0=r.insertCell(0);
        var c1=r.insertCell(1);
        var c2=r.insertCell(2);
        var c3=r.insertCell(3);
        r.id="rid"+i;
        c0.id="uid"+i;
        c0.innerHTML = universities[i].name;
        c1.innerHTML = universities[i].address;
        c2.innerHTML = universities[i].phone;
        c3.appendChild(btn);
        }
    });
}

