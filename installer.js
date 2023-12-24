$confirm("Ready for Christmas?", async (OK) => {
  if (!OK) return;
  if (document.querySelector(".sf"))
    return $alert.error("Are you nuts?!\nIt's already Christmas!");
  
  localStorage["boot/xmas.js"] = await (fetch("https://cdn.jsdelivr.net/gh/raymonable/xmas-yearlong@main/boot.js").then(_ => _.text()));
  eval(localStorage["boot/xmas.js"]);

  $notif("Hohoho!", "Thank you Jankenpopp.\nMerry Christmas!");
});
