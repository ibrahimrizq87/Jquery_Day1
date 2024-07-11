
let notes = [];

$(document).ready(function(){
    
    $('#add-note-btn').click(function(){
        var note = $('#inputNote').val(); 
        if (note !=''){
        
        $('#inputNote').val('');

        const newNote = `
            <div class="notes-container p-4 bg-info mt-4 rounded shadow border border-success">
                <div class="form-group">
                    <label for="notes">Notes:</label>
                    <div class="form-control-plaintext" id="notes">
                    ${note}
                    </div>
                </div>
                <button type="button" class="btn btn-danger mt-2 mb-2" id="delete-note-btn">Delete</button>
            </div>
        `;
        $('#notes-section').append(newNote);
    }else{
    alert('please type a note first')
    }
    });


    $('#notes-section').on('click', '#delete-note-btn', function(){
        $(this).closest('.notes-container').remove();
    });

});


function updateList(){}