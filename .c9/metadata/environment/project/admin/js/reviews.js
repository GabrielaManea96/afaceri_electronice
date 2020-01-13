{"filter":false,"title":"reviews.js","tooltip":"/project/admin/js/reviews.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":114,"column":1},"action":"insert","lines":["/*global $*/","","// READ recods on page load","$(document).ready(function () {","    readRecords(); // calling function","});","","// READ records","function readRecords() {","    $.get(\"/reviews/\", {}, function (data, status) {","        data.forEach(function(value) {","            var row = '<tr id=\"row_id_'+ value.id +'\">'","            \t\t\t+ displayColumns(value)","        \t\t\t\t+ '</tr>';","            $('#articles').append(row);","        });","    });","}","","function displayColumns(value) {","    return \t'<td>'+value.id+'</td>'","            + '<td class=\"product_id\">'+value.product_id+'</td>'","            + '<td class=\"name\">'+value.name+'</td>'","            + '<td class=\"content\">'+value.content+'</td>'","\t\t\t+ '<td class=\"score\">'+value.score+'</td>'","\t\t\t+ '<td align=\"center\">'","\t\t\t+\t'<button onclick=\"viewRecord('+ value.id +')\" class=\"btn btn-edit\">Update</button>'","\t\t\t+ '</td>'","\t\t\t+ '<td align=\"center\">'","\t\t\t+\t'<button onclick=\"deleteRecord('+ value.id +')\" class=\"btn btn-danger\">Delete</button>'","\t\t\t+ '</td>';","}","","function addRecord() {","    $('#id').val('');","    $('#product_id').val('');","    $('#name').val('');","    $('#content').val('');","    $('#score').val('');","    $('#myModalLabel').html('Add New Review');","}","","function viewRecord(id) {","    var url = \"/reviews/\" + id;","    ","    $.get(url, {}, function (data, status) {","        //bind the values to the form fields","        $('#product_id').val(data.product_id);","        $('#name').val(data.name);","        $('#content').val(data.content);","        $('#score').val(data.score);","        $('#id').val(id);","        $('#myModalLabel').html('Edit Review');","        $('#add_new_record_modal').modal('show');","    });","}","","function saveRecord() {","    //get data from the html form","    var formData = $('#record_form').serializeObject();","    ","    //decide if it's an edit or create","    if(formData.id) {","        updateRecord(formData);","    } else {","        createRecord(formData);","    }","}","","function createRecord(formData) {","    $.ajax({","        url: '/reviews/',","        type: 'POST',","        accepts: {","            json: 'application/json'","        },","        data: formData,","        success: function(data) {","            $('#add_new_record_modal').modal('hide');","            ","            var row = '<tr id=\"row_id_'+ data.id +'\">'","            \t\t\t+ displayColumns(data)","        \t\t\t\t+ '</tr>';","            $('#articles').append(row);","        } ","    });","}","","function updateRecord(formData) {","    $.ajax({","        url: '/reviews/'+formData.id,","        type: 'PUT',","        accepts: {","            json: 'application/json'","        },","        data: formData,","        success: function(data) {","            $('#row_id_'+formData.id+'>td.product_id').html(formData.product_id);","            $('#row_id_'+formData.id+'>td.name').html(formData.name);","            $('#row_id_'+formData.id+'>td.content').html(formData.content);","            $('#row_id_'+formData.id+'>td.score').html(formData.score);","            $('#add_new_record_modal').modal('hide');","        } ","    });","}","","function deleteRecord(id) {","    $.ajax({","        url: '/reviews/'+id,","        type: 'DELETE',","        success: function(data) {","            $('#row_id_'+id).remove();","        }","    });","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":1465,"scrollleft":0,"selection":{"start":{"row":96,"column":30},"end":{"row":96,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1578951508253,"hash":"bd613956adeab93f27c8f348e45d0db340ebe2ce"}