const app = document.getElementById("app");

app.innerHTML = `

<div class="screen">

<div class="logo">W</div>

<div class="subtitle">

Unlimited Movies & Series

</div>

<div class="loader"></div>

</div>

`;

setTimeout(()=>{

app.innerHTML=`

<div class="screen">

<h1>Welcome To W</h1>

<p style="margin-top:20px">

Version 0.1

</p>

</div>

`;

},2000);
