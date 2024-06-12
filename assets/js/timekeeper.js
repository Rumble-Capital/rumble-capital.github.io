$("#getting-started").countdown("2023/10/31", function(event) {

  $(this).text(
    event.strftime('%D:%H:%M:%S')
  );
});
