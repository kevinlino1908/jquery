$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    const novoItem = $("<li></li>");
    const novoParagrafo = $(`<p>${novaTarefa}</p>`);
    $(novoItem).append(novoParagrafo);
    $("ul").append(novoItem);
    $("#nova-tarefa").val("");
    novoParagrafo.on("click", function () {
      $(this).css("text-decoration", "line-through");
    });
  });
});
