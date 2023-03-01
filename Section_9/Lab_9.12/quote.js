$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   $.ajax({
      url: 'https://wp.zybooks.com/quotes.php?topic='+topic+'&count='+count,
      type: "GET",
      dataType: "json",
      success: function (response) {
         if(response.error){
            $("#quotes").html(response.error);
         }
         else{
            let quotes = "<ol>";
            for (let i = 0; i < count; i++) {
               quotes += "<li>" + response[i].quote + " - "+response[i].source + "</li>";
            }
            quotes += "</ol>";
            $("#quotes").append(quotes);
         }
      }
   });
}

