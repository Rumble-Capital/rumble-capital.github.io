// dropdown clicked
$(".filter-projects-dropdown a").on("click", function(e) {
    // preventing default behaviour of a tag
    e.preventDefault();
    // getting name of this selected item from dropdown
    var selectedName = $(this).text();
    // setting name of button = name of selected item from dropdown
    $(".filter-projects-btn").text(selectedName);
    // hiding all the projects.
    // IMPORTANT: If new owner is added as class and in dropdown then it's name should be added here
    $(".Cornelius,.Omar,.Chris, .Rumble").fadeOut();
    // if show all pressed then show all
    if (selectedName == "Show All") {
        $(".Cornelius, .Omar, .Chris, .Rumble").slideToggle();
    } else {
        // showing the selected owners
        $("." + selectedName).slideToggle();
    }
});
