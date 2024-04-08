document.getElementById("howtospec80").addEventListener("click", onClickExtraDescription);

document.getElementById("howtospec80").addEventListener("mouseout", onMouseOurReturn)


function onClickExtraDescription() {
    document.getElementById("howtospec80").innerHTML = "Sit qui irure voluptate in sint aute veniam veniam duis elit officia esse. Cillum Lorem officia magna consectetur id dolor cillum. Adipisicing eiusmod eu ut dolore ut aliquip amet non. Velit cillum ut qui amet ullamco tempor consequat aliquip duis est elit. Consequat est fugiat nostrud in magna eiusmod ea excepteur commodo non veniam enim adipisicing duis.";
  }

  function onMouseOurReturn() {
    document.getElementById("howtospec80").innerHTML = "<b>How we'd spec it &darr;</b>"
  }