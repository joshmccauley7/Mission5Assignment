// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#btnSubmit").click(function () {
    if ($("#hours").val() < 0)
    {
        $("#output").val("Enter a postive number")
    }
    if($("#hours").val() >= 0)
    {
        $("#output").val("Charge is: $" + $("#hours").val() * $("#charge").val())
    }
})