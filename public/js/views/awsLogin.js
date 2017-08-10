/**
 * Created by saikrishna on 8/1/2017.
 */
$(document).ready(function(){
    $('#purpose').on('change', function() {
        if ( this.value == 'AWS')
        //.....................^.......
        {
            $("#Azure").hide();
            $("#OpenStack").hide();
            $("#VMWare").hide();
            $("#AWSAccess").show();
        }
        else  if ( this.value == 'Azure')
        {
            $("#AWSAccess").hide();
            $("#Azure").show();
            $("#OpenStack").hide();
            $("#VMWare").hide();
        }
        else if ( this.value == 'OpenStack')
        {
            $("#AWSAccess").hide();
            $("#Azure").hide();
            $("#OpenStack").show();
            $("#VMWare").hide();;
        }
        else if ( this.value == 'VMWare')
        {
            $("#AWSAccess").hide();
            $("#Azure").hide();
            $("#OpenStack").hide();
            $("#VMWare").show();
        }
        else
        {
            $("#AWSAccess").hide();
        }
    });
})