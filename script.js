$(document).ready(function() {

    $("#fetchData").click(function() {
        // Make an AJAX GET request
        $.get('https://jsonplaceholder.typicode.com/posts/1', { id: 1 }, 
        function(response) {
            console.log(response);
            // Display the result
            $('#result').html(`
                <p><strong>Title:</strong> ${response.title}</p>
                <p><strong>Body:</strong> ${response.body}</p>
            `);
        }, 'json');
    });

    $('#fetchUser').click(function() {
        // Make an AJAX GET request
        $.ajax({
            url: 'https://randomuser.me/api/', // Public API to fetch Random User
            type: 'GET',
            success: function(response) {
                var user = response.results[0];
                var userInfo = `
                    <p>Name: ${user.name.first}</p>
                    <p>Email: ${user.email}</p>
                    <p>Gender: ${user.gender}</p>
                    <img src="${user.picture.large}" />
                `;
                $('#result').html(userInfo);
            },
            error: function(error) {
                console.log(error);
                console.error('Error:', error);
            }
        });
    });

    $('#submit').click(function() {
        var name = $('#name').val();  // Fixed case sensitivity for '#name'
        var age = $('#age').val();

        $.post('https://jsonplaceholder.typicode.com/posts', { title: name, body: age },
            function(data) {
                $('#postDataResult').html(`<p>Server Response</p> ID: ${data.id}`);
            }
        ).fail(function() {
            $('#postDataResult').html(`<p>Error Submitting Data</p>`);
        });
    });

    $('#loadContent').click(function() {
        $('#content').load('https://jsonplaceholder.typicode.com/', function(status) {
            if (status == 'error') {
                $('#content').html(`<p>Error Loading Content</p>`);
            }
        });
    });
});
