function search(){
  var s = document.getElementById("search").value;
  document.write("<a href='javascript:s.value();'><script>document.write(s.value);</script></a>");
}
