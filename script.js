function search(){
  var s = document.getElementById("search").value;
  document.write("<a href='javascript:document.getElementById('search').value'><script>document.write(s);</script></a>");
}
