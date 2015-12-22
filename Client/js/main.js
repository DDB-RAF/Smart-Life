var selectSupplier = function (event) {
    var suppler_id = $(event.currentTarget).attr("_id");
    $.ajax({
        type: 'GET',
        data: {
            id: suppler_id
        },
        url: '/service/queryBySupplierId',
        success: function (data) {
            $('#serviceTbody').empty();
            var tr = $('<tr/>');
            for(i in data){
                var td = $('<td/>',{class:"col s3"});
                var cardDiv = $('<div/>',{class:"blue-grey darken-1 card"});
                var contentDIV = $('<div/>',{class:"card-content white-text"});
                $('<span/>',{class:"card-title",html:data[i].name}).appendTo(contentDIV);
                $('<p/>',{html:"Begin time:"+data[i].begin_time}).appendTo(contentDIV);
                $('<p/>',{html:"End time:"+data[i].end_time}).appendTo(contentDIV);
                
                var actionDiv = $('<div/>',{class:"card-action"});
                $('<a/>',{href:"timetable.html?id="+data[i]._id,html:"Time Table"}).appendTo(actionDiv);
                
                contentDIV.appendTo(cardDiv);
                actionDiv.appendTo(cardDiv);
                cardDiv.appendTo(td);
                td.appendTo(tr);
                if(i%3==2|| i == data.length-1){
                    tr.appendTo($('#serviceTbody'));
                    tr = $('<tr/>');
                }
            }
        }
    });
};
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/supplier/all',
        success: function (data) {
            for (i in data) {
                var classDiv = $('<div/>', {
                    class: "collapsible-header",
                    html: '<i class="material-icons">toc</i>' + data[i]._id
                });
                var ul = $('<ul/>', {
                    class: "collection with-header",
                });
                for (j in data[i].suppliers) {
                    $('<li/>', {
                        class: "collection-item",
                        html: data[i].suppliers[j].name,
                        _id: data[i].suppliers[j]._id,
                        style: "cursor:pointer",
                    }).click(selectSupplier).appendTo(ul);
                }
                var li = $('<li/>');
                classDiv.appendTo(li);
                ul.appendTo($('<div/>', { class: "collapsible-body" }).appendTo(li));
                li.appendTo('#supplierList');
            }
        }
    });

});