(function () {
  function init() {
    //change request method
    $("#add-field").click(addField);
    $(".remove").click(removeField);
    $("#start").click(start);
  }

  function addField() {
    /*<div class="data">
            <button class="btn remove" type="button"><span class="glyphicon glyphicon-minus"></span></button>
            <input type="text" class="form-control key" placeholder="name">
            <input type="text" class="form-control value" placeholder="Rostik">
          </div>*/
    var div = makeElement({
      name: "div",
      class: "data"
    });

    var button = makeElement({
      name: "button",
      class: "btn remove",
      type: "button",
      event: {
        name: "click",
        handler: removeField
      }
    });

    var span = makeElement({
      name: "span",
      class: "glyphicon glyphicon-minus",
    });
    button.append(span);

    var key = makeElement({
      name: "input",
      class: "form-control key",
      type: "text",
      placeholder: "name"
    });
    var value = makeElement({
      name: "input",
      class: "form-control value",
      type: "text",
      placeholder: "value"
    });

    div.append(button, key, value);

    $(".fields").append(div);
  }

  function removeField(e) {
    $(this).closest(".data").remove();
  }

  //Element maker
  function makeElement(el) {
    if (!el.name) {
      return $("<div></div>");
    }

    var newElement = $("<" + el.name + "/>");
    for (var key in el) {
      if (key === "class") {
        newElement.addClass(el[key]);
      } else if (key === "event") {
        newElement.on(el[key].name, el[key].handler);
      } else if (key !== "name") {
        newElement.attr(key, el[key]);
      }
    }
    return newElement;
  }

  function start() {
    clearTextarea();
    //Object with custom field
    var object = {};
    //Key of custom field
    var keys = $(".key")
    //Value of custom field
    var values = $(".value");
    for (var i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      object[keys[i].value] = values[i].value;
    }

    var templateString = $(".template-string").val();

    var str = template(object, templateString);
    setTextarea(str);
  }

  function clearTextarea() {
    $("#string").text("");
  }

  function setTextarea(text) {
    $("#string").text(text);
  }

  init();
})();