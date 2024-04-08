document.getElementById("howtospec80").addEventListener("click", onClickExtraDescriptionFor80);

document.getElementById("howtospec80").addEventListener("mouseout", onMouseOutReturnfor80)

document.getElementById("howtospec15").addEventListener("click", onClickExtraDescriptionFor15);

document.getElementById("howtospec15").addEventListener("mouseout", onMouseOutReturnFor15)

document.getElementById("howtospec5").addEventListener("click", onClickExtraDescriptionFor5);

document.getElementById("howtospec5").addEventListener("mouseout", onMouseOutReturnFor5)

function onClickExtraDescriptionFor80() {
    var element = document.getElementById("howtospec80");
    element.classList.add("animated");
    document.getElementById("howtospec80").innerHTML = "Sit qui irure voluptate in sint aute veniam veniam duis elit officia esse. Cillum Lorem officia magna consectetur id dolor cillum. Adipisicing eiusmod eu ut dolore ut aliquip amet non. Velit cillum ut qui amet ullamco tempor consequat aliquip duis est elit. Consequat est fugiat nostrud in magna eiusmod ea excepteur commodo non veniam enim adipisicing duis.";
  }

  function onMouseOutReturnfor80() {
    document.getElementById("howtospec80").innerHTML = "<b>How we'd spec it &darr;</b>"
  }

  function onClickExtraDescriptionFor15() {
    var element = document.getElementById("howtospec15");
    element.classList.add("animated");
    document.getElementById("howtospec15").innerHTML = "Sit qui irure voluptate in sint aute veniam veniam duis elit officia esse. Cillum Lorem officia magna consectetur id dolor cillum. Adipisicing eiusmod eu ut dolore ut aliquip amet non. Velit cillum ut qui amet ullamco tempor consequat aliquip duis est elit. Consequat est fugiat nostrud in magna eiusmod ea excepteur commodo non veniam enim adipisicing duis.";
  }

  function onMouseOutReturnFor15() {
    document.getElementById("howtospec15").innerHTML = "<b>How we'd spec it &darr;</b>"
  }

  function onClickExtraDescriptionFor5() {
    var element = document.getElementById("howtospec15");
    element.classList.add("animated");
    document.getElementById("howtospec5").innerHTML = "Sit qui irure voluptate in sint aute veniam veniam duis elit officia esse. Cillum Lorem officia magna consectetur id dolor cillum. Adipisicing eiusmod eu ut dolore ut aliquip amet non. Velit cillum ut qui amet ullamco tempor consequat aliquip duis est elit. Consequat est fugiat nostrud in magna eiusmod ea excepteur commodo non veniam enim adipisicing duis.";
  }

  function onMouseOutReturnFor5() {
    document.getElementById("howtospec5").innerHTML = "<b>How we'd spec it &darr;</b>"
  }