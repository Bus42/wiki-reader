$(document).ready(function() {
    // Search function
    var fetch = function() {
        var searchTerm = $('#userInput').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data) {
                $('#output').html("<div class='list-group'></div>");
                var list = $('div.list-group');
                for (i = data[1].length - 1; i >= 0; i--) {
                    list.prepend("<a class='list-group-item list-group-item-success' href=" + data[3][i] + " target='blank'><h2>" + data[1][i] + "</h2><p>" + data[2][i] + "</p></a>");
                };
                $('#output').slideDown('slow');
            },
        }); // End of AJAX callback
    }; //end of fetch

    // Enter key
    $('#searchForm').submit(function() {
        $('#output').slideToggle('slow', fetch);
    });
    // Fetch Article button
    $('#submitBtn').on('click', function() {
        $('#output').slideUp('slow', fetch);
    });

});