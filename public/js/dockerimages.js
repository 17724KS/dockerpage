/**
 * Created by saikrishna on 8/1/2017.
 */

var dockerImages;

$('#ShowImages').click(function(e){
    e.preventDefault()



    console.log('select_link clicked');


    $.ajax({
        type:'GET',
        url:'http://10.1.50.145:5000/v2/_catalog',
        success: function(data ,status) {

            console.log(JSON.stringify(data.repositories));
            console.log(status);
            dockerImage1 = JSON.stringify(data.repositories[0]);
            var dockerimageafter = dockerImage1.replace(/"/g,'');
            dockerImage2 = JSON.stringify(data.repositories[1]);
            dockerImage3 = JSON.stringify(data.repositories[2]);

            dockerImage4 = JSON.stringify(data.repositories[3]);

            var dockerimage2after = dockerImage2.replace(/"/g,'');
            var dockerimage3after = dockerImage3.replace(/"/g,'');
            var dockerimage4after = dockerImage4.replace(/"/g,'');

            $('#DockerImage1').text(dockerimageafter);
            $('#DockerImage2').text(dockerimage2after);
            $('#DockerImage3').text(dockerimage3after);
            $('#DockerImage4').text(dockerimage4after);



            $('#DockerTable').removeClass('hide');
        },

        error:function(status,errorThrown){
            alert('text status' + textstatus + ',err'+ errorThrown);
            $('#Env_ErrorModal').modal('show');
            $('#LoadingModal').modal('hide');
        }
    })






    });

$('#ShowImagesinfo').click(function(e){
    e.preventDefault()

    console.log('select_link clicked');


    $.ajax({
        type:'GET',
        url:'http://10.1.50.145:5000/v2/hellordops/manifests/latest',
        success: function(data ,status) {
            var dockerdata = JSON.parse(data);
            console.log(dockerdata);
            console.log(dockerdata["tag"]);
            console.log(dockerdata.architecture);

        },
        error:function(status,errorThrown){
            alert('text status' + textstatus + ',err'+ errorThrown);
            $('#Env_ErrorModal').modal('show');
            $('#LoadingModal').modal('hide');
        }
    })






});


