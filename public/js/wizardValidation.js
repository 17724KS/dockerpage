/**
 * Created by saikrishna on 6/16/2017.
 */


$(function() {
    $("#selectedRegion").change(function () {
        if ($(this).val() == 'AWS') {
            $("#AwsRegion").removeClass('hide');
            $("#AwsRegion").addClass('show');
        }else{
            $("#AwsRegion").removeClass('show');
            $("#AwsRegion").addClass('hide');
        }
    });
    $("#EnvRegion").change(function () {
        if ($(this).val() == 'us-east-1') {
            $("#Ami").removeClass('hide');
            $("#Ami").addClass('show');
            $("#us-east-1").removeClass('hide');
            $("#us-east-1").addClass('show');
            $("#us-east-2").removeClass('show');
            $("#us-east-2").addClass('hide');
        }
        else if($(this).val() == 'us-east-2'){
            $("#Ami").removeClass('hide');
            $("#Ami").addClass('show');
            $("#us-east-2").removeClass('hide');
            $("#us-east-2").addClass('show');
            $("#us-east-1").removeClass('show');
            $("#us-east-1").addClass('hide');
        }
        else{
            $("#Ami").removeClass('show');
            $("#Ami").addClass('hide');
            $("#us-east-1").removeClass('show');
            $("#us-east-1").addClass('hide');
            $("#us-east-2").removeClass('show');
            $("#us-east-2").addClass('hide');
        }
    });
    $("#Ami").change(function () {
        if ($(this).hasClass('selected')) {
            $("#Instance").removeClass('hide');
            $("#Instance").addClass('show');
        }else{
            $("#Instance").removeClass('show');
            $("#Instance").addClass('hide');
        }
    });

    $("#InstanceFamily").change(function () {
        if ($(this).val() == 'General-purpose') {
            $("#Instances").removeClass('hide');
            $("#Instances").addClass('show');
            $("#GeneralPurpose").removeClass('hide');
            $("#GeneralPurpose").addClass('show');
            $("#ComputeOptimized").removeClass('show');
            $("#ComputeOptimized").addClass('hide');
            $("#MemoryOptimized").removeClass('show');
            $("#MemoryOptimized").addClass('hide');
            $("#StorageOptimized").removeClass('show');
            $("#StorageOptimized").addClass('hide');
            $("#AcceleratedComputing").removeClass('show');
            $("#AcceleratedComputing").addClass('hide');
        } else if($(this).val() == 'Compute-optimized') {
            $("#Instances").removeClass('hide');
            $("#Instances").addClass('show');
            $("#ComputeOptimized").removeClass('hide');
            $("#ComputeOptimized").addClass('show');
            $("#MemoryOptimized").removeClass('show');
            $("#MemoryOptimized").addClass('hide');
            $("#StorageOptimized").removeClass('show');
            $("#StorageOptimized").addClass('hide');
            $("#AcceleratedComputing").removeClass('show');
            $("#AcceleratedComputing").addClass('hide');
            $("#GeneralPurpose").removeClass('show');
            $("#GeneralPurpose").addClass('hide');

        } else if($(this).val() == 'Memory-optimized') {
            $("#Instances").removeClass('hide');
            $("#Instances").addClass('show');
            $("#MemoryOptimized").removeClass('hide');
            $("#MemoryOptimized").addClass('show');
            $("#StorageOptimized").removeClass('show');
            $("#StorageOptimized").addClass('hide');
            $("#AcceleratedComputing").removeClass('show');
            $("#AcceleratedComputing").addClass('hide');
            $("#GeneralPurpose").removeClass('show');
            $("#GeneralPurpose").addClass('hide');
            $("#ComputeOptimized").removeClass('show');
            $("#ComputeOptimized").addClass('hide');
        }else if($(this).val() == 'Storage-optimized') {
            $("#Instances").removeClass('hide');
            $("#Instances").addClass('show');
            $("#StorageOptimized").removeClass('hide');
            $("#StorageOptimized").addClass('show');
            $("#AcceleratedComputing").removeClass('show');
            $("#AcceleratedComputing").addClass('hide');
            $("#GeneralPurpose").removeClass('show');
            $("#GeneralPurpose").addClass('hide');
            $("#ComputeOptimized").removeClass('show');
            $("#ComputeOptimized").addClass('hide');
            $("#MemoryOptimized").removeClass('show');
            $("#MemoryOptimized").addClass('hide');
        }else if($(this).val() == 'Accelerated-computing') {
            $("#Instances").removeClass('hide');
            $("#Instances").addClass('show');
            $("#AcceleratedComputing").removeClass('hide');
            $("#AcceleratedComputing").addClass('show');
            $("#GeneralPurpose").removeClass('show');
            $("#GeneralPurpose").addClass('hide');
            $("#ComputeOptimized").removeClass('show');
            $("#ComputeOptimized").addClass('hide');
            $("#MemoryOptimized").removeClass('show');
            $("#MemoryOptimized").addClass('hide');
            $("#StorageOptimized").removeClass('show');
            $("#StorageOptimized").addClass('hide');
        }
        else  {
            $("#Instances").removeClass('hide');
            $("#Instances").addClass('show');
            $("#AcceleratedComputing").removeClass('show');
            $("#AcceleratedComputing").addClass('hide');
            $("#GeneralPurpose").removeClass('show');
            $("#GeneralPurpose").addClass('hide');
            $("#ComputeOptimized").removeClass('show');
            $("#ComputeOptimized").addClass('hide');
            $("#MemoryOptimized").removeClass('show');
            $("#MemoryOptimized").addClass('hide');
            $("#StorageOptimized").removeClass('show');
            $("#StorageOptimized").addClass('hide');
        }

    });






    $('#Closebutton1').click(function(){

        window.location.href = '/tools';

    });
    $('#dismissButton1').click(function(){ window.location.href = '/tools';});
    $('#Closebutton2').click(function(){

        window.location.href = '/tools';

    });
    $('#dismissButton2').click(function(){ window.location.href = '/tools';});

    $('#form_submit').click(function(e){
        e.preventDefault();


        $('#LoadingModal').modal('show');




        console.log('select_link clicked');
        var amivalue = $.map($('select[name="ami"]'),function (e) {
            return $(e).val();
        });
        var instancevalue = $.map($('select[name="instance_type"]'),function (e) {
            return $(e).val();
        });
        var data = {
            provider : $('#selectedRegion').val(),
            aws_region : $('#EnvRegion').val(),
            ami : amivalue[0],
            instance_state : $('#InstanceFamily').val(),
            instance_type: instancevalue[0],
            key_name : $('input[name="key_name"]').val(),
        }

        /*var data = $('#envData').serializeArray();*/


        $.ajax({
            type:'POST',
            data:JSON.stringify(data),
            contentType:'json',
            url:'/tools',
            success: function(status) {
                if (status == 'ok')
                    $('#EnvModal').modal('show');
                $('#LoadingModal').modal('hide');
                //console.log(global.Jip_response);
                var formdata = JSON.stringify(data);

                console.log(data);
                //$('#DockerImages').text(formdata);
            },
            error:function(status,errorThrown){
                //alert('text status' + textstatus + ',err'+ errorThrown);
                $('#Env_ErrorModal').modal('show');
                $('#LoadingModal').modal('hide');
            }
        })






    });

    $('#delete_instances').click(function(e){
        e.preventDefault();

        $.ajax({
            type:'DELETE',
            url:'/tools',
            success: function(result) {
                if (status == 'ok')
                    console.log(result);

            },
            error:function(status,errorThrown){
                console.log(status,errorThrown);

            }
        })

    });





});
