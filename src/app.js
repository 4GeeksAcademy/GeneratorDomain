function GenerarDom() {
  let subject = ["the", "our"];
  let adj = ["great", "big"];
  let predicate = ["jogger", "racoon"];
  let ext = [".com", ".net", ".es"];

  let myDomain = [];

  for (let x = 0; x < subject.length; x++) {
    for (let i = 0; i < adj.length; i++) {
      for (let j = 0; j < predicate.length; j++) {
        for (let b = 0; b < ext.length; b++) {
          myDomain.push(`${subject[x]}${adj[i]}${predicate[j]}${ext[b]}`);
        }
      }
    }
  }
  document.getElementById("domain").innerHTML = myDomain.join("<br>");
}
