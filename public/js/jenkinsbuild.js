/**
 * Created by saikrishna on 7/27/2017.
 */


$('#NewItem').click (function () {
    window.location.href = '/job';
})

$('#CancelJob').click (function () {
    window.location.href = '/jenkins';
})
$('#NewBuild').click(function(e){
    e.preventDefault()

    console.log('select_link clicked');


    $.ajax({
        type:'POST',
        url:'/jenkins',
        success: function(status) {
            if (status == 'ok')
                $('#EnvModal').modal('show');
                $('#LoadingModal').modal('hide');
            //console.log(global.Jip_response);

        },
        error:function(status,errorThrown){
            alert('text status' + textstatus + ',err'+ errorThrown);
            $('#Env_ErrorModal').modal('show');
            $('#LoadingModal').modal('hide');
        }
    })






});


$('#CreateJob').click(function(e){
    e.preventDefault()
    var data = $('#projectname').val();
    console.log('create job link clicked');

    window.location.href = '/jenkins';


    $.ajax({
        type:'POST',
        contentType:'json',
        data:data,
        url:'/job',
        success: function(status) {
            if (status == 'ok')
                $('#EnvModal').modal('show');
            $('#LoadingModal').modal('hide');
            var formdata = data;

            console.log(data);
            //console.log(global.Jip_response);

        },
        error:function(status,errorThrown){
            alert('text status' + textstatus + ',err'+ errorThrown);
            $('#Env_ErrorModal').modal('show');
            $('#LoadingModal').modal('hide');
        }
    })






});