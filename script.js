var list = [];

$(document).ready(function () 
 {
  $.get("https://davids-restaurant.herokuapp.com/menu_items.json", function (data) 
   {
    list = data.menu_items;
    list.forEach((item, index) => 
                 
    {
      $("#Menubar").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  $("#Menubar").change((e) => {
    const item = list[e.target.value];
    $('#showdetails').html(
        `<p><b><i> Short name of item </b></i>:- ${item.short_name} </p>
        <p><b><i> Name of special item </b></i>:- ${item.name} </p>
        <p><b><i> Description of Corresponding item </b></i>:- ${item.description} </p>
        <p><b><i> Item's Price (in dollars) </b></i>:- ${item.price_large} </p>
        `
    )
  })
});  
