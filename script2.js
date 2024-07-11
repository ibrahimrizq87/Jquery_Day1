$(document).ready(function () {
    $('.tab-content').hide();

    $('.tab-content:nth-child(1)').show();

    $('.tab').on('click', function (event) {
          event.preventDefault();
  
          $('.tab').removeClass('text-light');
          $('.tab').removeClass('bg-secondary');
          $('.tab').addClass('text-dark');

          $(this).removeClass('text-dark');
          $(this).addClass('bg-secondary').addClass('text-light');

          var index = $(this).index('.tab');

        switch (index+1) {
            case 1:
                $('.tab-content').hide();
                $('.tab-content:nth-child(1)').show();
                break;
            case 2:
                $('.tab-content').hide();
                $('.tab-content:nth-child(2)').show();
                break;
            case 3:
                $('.tab-content').hide();
                $('.tab-content:nth-child(3)').show();
                break;
            case 4:
                $('.tab-content').hide();
                $('.tab-content:nth-child(4)').show();
                break;
            case 5:
                $('.tab-content').hide();
                $('.tab-content:nth-child(5)').show();
                break;
        }
    });

   

});