$(document).ready(function () {
    // Sample data
    var data = [
        { name: "John Doe", email: "john@example.com", age: 30 },
        { name: "Jane Doe", email: "jane@example.com", age: 25 },
        { name: "Bob Smith", email: "bob@example.com", age: 40 },
        // Add more data here...
    ];

    // Populate table with data
    $.each(data, function (index, item) {
        $('#sortable-table tbody').append(`
      <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.age}</td>
      </tr>
    `);
    });

    // Sorting functionality
    $('th').on('click', function () {
        var column = $(this).index();
        var order = $(this).hasClass('sort-asc') ? 'desc' : 'asc';
        $(this).removeClass('sort-asc sort-desc').addClass('sort-' + order);

        // Sort data
        data.sort(function (a, b) {
            if (order === 'asc') {
                return a[$(this).text().toLowerCase()] < b[$(this).text().toLowerCase()] ? -1 : 1;
            } else {
                return a[$(this).text().toLowerCase()] > b[$(this).text().toLowerCase()] ? -1 : 1;
            }
        });

        // Update table with sorted data
        $('#sortable-table tbody').empty();
        $.each(data, function (index, item) {
            $('#sortable-table tbody').append(`
        <tr>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.age}</td>
        </tr>
      `);
        });
    });
});