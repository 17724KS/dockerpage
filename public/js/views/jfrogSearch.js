$(document).ready(function(){
    $('#purpose').on('change', function() {
        if ( this.value == '1')
        //.....................^.......
        {
            $("#Package").hide();
            $("#ArchiveEntries").hide();
            $("#Property").hide();
            $("#Checkum").hide();
            $("#Qucik").show();
            $("#Jcenter").hide();
            $("#Trash").hide();

        }

        else  if ( this.value == '2')
        {
            $("#Qucik").hide();
            $("#Package").show();
            $("#ArchiveEntries").hide();
            $("#Property").hide();
            $("#Checkum").hide();
            $("#Jcenter").hide();
            $("#Trash").hide();

        }
        else if ( this.value == '3')
        {
            $("#Qucik").hide();
            $("#Package").hide();
            $("#ArchiveEntries").show();
            $("#Property").hide();
            $("#Checkum").hide();
            $("#Jcenter").hide();
            $("#Trash").hide();
        }
        else if ( this.value == '4')
        {
            $("#Qucik").hide();
            $("#Package").hide();
            $("#ArchiveEntries").hide();
            $("#Property").show();
            $("#Checkum").hide();
            $("#Jcenter").hide();
            $("#Trash").hide();
        }
        else if ( this.value == '5')
        {
            $("#Qucik").hide();
            $("#Package").hide();
            $("#ArchiveEntries").hide();
            $("#Property").hide();
            $("#Checkum").show();
            $("#Jcenter").hide();
            $("#Trash").hide();
        }
        else if ( this.value == '6')
        {
            $("#Qucik").hide();
            $("#Package").hide();
            $("#ArchiveEntries").hide();
            $("#Property").hide();
            $("#Checkum").hide();
            $("#Jcenter").show();
            $("#Trash").hide();
        }
        else if ( this.value == '7')
        {
            $("#Qucik").hide();
            $("#Package").hide();
            $("#ArchiveEntries").hide();
            $("#Property").hide();
            $("#Checkum").hide();
            $("#Jcenter").hide();
            $("#Trash").show();
        }
        else
        {
            $("#Qucik").hide();
        }
    });
})