<template>
<!-- nav -->
<div>
  <div class="row bg-dark">
      <div class="offset-1 col-1 navbar navbar-dark navbar-expand-lg">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page"
                     href="/">Restaurants</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/bookings/">Bookings</a>
              </li>
          </ul>
      </div>
      <div class="col-8 text-center">
          <img src="@/assets/logo.png">
      </div>
      <div class="col-1 text-end">
          <img id="notifications" class="bell mt-70p mr-10p" src="img/bell.png"
               alt="notifications">
          <a href="stats.html"><img class="bell mt-70p" src="img/graph.png"
                                    alt="stats-icon"></a>
      </div>
  </div>
</div>
<!-- end nav -->
<router-view/>
</template>
<!-- Required Stylesheets -->
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"
/>
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"
/>
<style lang="scss">
label {
	line-height: 38px;
}
a {
	color: black;
	text-decoration: none;
}
a:hover {
	color: #007627;
}
.success {
	background-color: lightgreen;
}
.preview-img {
	width: 90%;
}
.mt-70p {
	margin-top: 50px;
}
.mr-10p {
	margin-right: 10px;
}
.btn-primary {
	background-color: #007627;
	border: 0;
}
.btn-primary:hover {
	background-color: lightgreen;
}
.ml-auto {
	margin-left: auto !important;
}
.bell {
	width: 35px;
}
</style>
